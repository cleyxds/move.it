"use server"

import { getServerSession } from "next-auth"

import { doc, increment, updateDoc } from "firebase/firestore"

import { db } from "@/services/firebase"
import { revalidatePath } from "next/cache"

const USER_DETAILS_COLLECTION = "user_details"

export async function levelUp() {
  const session = await getServerSession()
  const user = session?.user?.email

  if (!user) return

  const userRef = doc(db, USER_DETAILS_COLLECTION, user)

  await updateDoc(userRef, {
    level: increment(1),
  })
}

export async function updateExperienceAndChallengesCompleted({
  currentExperience,
}: {
  currentExperience: number
}) {
  const session = await getServerSession()
  const user = session?.user?.email

  if (!user || isNaN(currentExperience)) return

  const userRef = doc(db, USER_DETAILS_COLLECTION, user)

  await updateDoc(userRef, {
    currentExperience,
    challengesCompleted: increment(1),
  })
}

export async function revalidatePomodoro() {
  revalidatePath("/pomodoro")
}
