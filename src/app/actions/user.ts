"use server"

import { cache } from "react"

import { getServerSession } from "next-auth"

import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore"

import { db } from "@/services/firebase"

import { revalidatePomodoro } from "@/app/actions/experience"
import calculateTotalXP from "@/utils/calculate-total-xp"

import {
  SocialProfile,
  UserDetailsGithubProfile,
  UserDetailsGoogleProfile,
  UserDetailsProfileData,
} from "@/types/auth"

const USER_DETAILS_COLLECTION = "user_details"

const INITIAL_EXPERIENCE_STATUS: ExperienceStatus = {
  level: 1,
  currentExperience: 0,
  challengesCompleted: 0,
  rest: true,
}

export async function createUserDetails(
  provider: string,
  profile: SocialProfile
) {
  const email = profile.email as string
  const emailId = email.toLowerCase()

  const userDocRef = doc(db, USER_DETAILS_COLLECTION, emailId)

  const docSnapshot = await getDoc(userDocRef)

  // Guard of the user already exists
  if (docSnapshot.exists()) return userDocRef.id

  let PROFILE_DATA: UserDetailsProfileData

  const GOOGLE_PROFILE_DATA: UserDetailsGoogleProfile = {
    provider,
    login: profile.email!,
    avatar_url: profile.picture!,
    name: profile.name!,
    email,
  }

  const GITHUB_PROFILE_DATA: UserDetailsGithubProfile = {
    provider,
    login: profile.login,
    company: profile.company,
    avatar_url: profile.avatar_url,
    name: profile.name!,
    email,
  }

  // prettier-ignore
  PROFILE_DATA = provider === "github" ? GITHUB_PROFILE_DATA : GOOGLE_PROFILE_DATA

  const data = {
    ...INITIAL_EXPERIENCE_STATUS,
    ...PROFILE_DATA,
  }

  await setDoc(userDocRef, data, { merge: true })

  return userDocRef.id
}

export const getUserDetails = cache(async () => {
  const session = await getServerSession()
  const email = session?.user?.email

  if (!email) return null

  const collectionRef = collection(db, USER_DETAILS_COLLECTION)

  const q = query(collectionRef, where("email", "==", email))

  const querySnapshot = await getDocs(q)

  const userDetailsRef = querySnapshot.docs[0]

  const userDetails = {
    docID: userDetailsRef.id,
    ...userDetailsRef.data(),
  } as User

  return userDetails
})

export const getLeaderboardData = cache(async (): Promise<LeaderboardRow[]> => {
  const session = await getServerSession()
  const email = session?.user?.email as string

  let data: LeaderboardRow[] = []

  const q = query(
    collection(db, USER_DETAILS_COLLECTION),
    where("challengesCompleted", ">", 0),
    orderBy("challengesCompleted", "desc")
  )

  const leaderboard = await getDocs(q)
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
    .then((users: User[]) => formatLeaderboardData(users, email))

  data = leaderboard

  return data
})

export const getUserByLogin = async (login: string): Promise<User | null> => {
  const collectionRef = collection(db, USER_DETAILS_COLLECTION)

  const q = query(collectionRef, where("login", "==", login))

  const querySnapshot = await getDocs(q)

  const userDetailsRef = querySnapshot.docs[0]

  if (!userDetailsRef) return null

  return {
    docID: userDetailsRef.id,
    ...userDetailsRef.data(),
  } as User
}

export async function toggleRest() {
  const session = await getServerSession()
  const email = session?.user?.email

  if (!email) return // Guard if the user is not logged in

  const userDocRef = doc(db, USER_DETAILS_COLLECTION, email)

  const docSnapshot = await getDoc(userDocRef)

  if (!docSnapshot.exists()) return // Guard if the user does not exist

  const { rest } = docSnapshot.data() as User

  await updateDoc(userDocRef, {
    rest: !rest,
  })

  revalidatePomodoro()
}

export async function formatLeaderboardData(
  users: User[],
  currentUserEmail: string
): Promise<LeaderboardRow[]> {
  return users.map((user, index) => ({
    id: user.email,
    position: index + 1,
    challenges: user.challengesCompleted,
    total_experience: calculateTotalXP(user.level, user.currentExperience),
    user: {
      level: user.level,
      name: user.name,
      slug: user.login,
      avatar_url: user?.avatar_url,
      me: user.email === currentUserEmail,
    },
  }))
}
