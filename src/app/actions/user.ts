"use server"

import { cache } from "react"

import { getServerSession } from "next-auth"
import { GithubProfile } from "next-auth/providers/github"

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore"

import { db } from "@/services/firebase"

const USER_DETAILS_COLLECTION = "user_details"

const INITIAL_EXPERIENCE_STATUS: ExperienceStatus = {
  level: 1,
  currentExperience: 0,
  challengesCompleted: 0,
}

export async function createUserDetails(profile: GithubProfile) {
  const email = profile.email as string
  const emailId = email.toLowerCase()

  const userDocRef = doc(db, USER_DETAILS_COLLECTION, emailId)

  const docSnapshot = await getDoc(userDocRef)

  // Guard of the user already exists
  if (docSnapshot.exists()) return userDocRef.id

  const GITHUB_DATA = {
    login: profile.login,
    company: profile.company,
    avatar_url: profile.avatar_url,
    name: profile.name,
    email,
  }

  const data = {
    ...INITIAL_EXPERIENCE_STATUS,
    ...GITHUB_DATA,
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
  return []
})
