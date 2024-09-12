"use server"

import { cookies } from "next/headers"

import { getServerSession } from "next-auth"

import { doc, increment, updateDoc } from "firebase/firestore"

import { db } from "@/services/firebase"
import { revalidatePath } from "next/cache"

const USER_DETAILS_COLLECTION = "user_details"

const LEVEL_COOKIE_NAME = "level"
const CURRENT_EXPERIENCE_COOKIE_NAME = "current_experience"
const CHALLENGES_COMPLETED_COOKIE_NAME = "challenges_completed"

export async function getStatus(): Promise<ExperienceStatus> {
  let level = 0
  let experienceToNextLevel = 0
  let currentExperience = 0
  let challengesCompleted = 0

  const levelCookieValue = Number(cookies().get(LEVEL_COOKIE_NAME)?.value)

  if (levelCookieValue) {
    level = levelCookieValue
  }

  const currentExperienceCookieValue = Number(
    cookies().get(CURRENT_EXPERIENCE_COOKIE_NAME)?.value
  )

  if (currentExperienceCookieValue) {
    currentExperience = currentExperienceCookieValue
  }

  const challengesCompletedCookieValue = Number(
    cookies().get(CHALLENGES_COMPLETED_COOKIE_NAME)?.value
  )

  if (challengesCompletedCookieValue) {
    challengesCompleted = challengesCompleted
  }

  experienceToNextLevel = Math.pow((Number(level) + 1) * 4, 2)

  const status: ExperienceStatus = {
    level,
    currentExperience,
    challengesCompleted,
    experienceToNextLevel,
  }

  return status
}

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
