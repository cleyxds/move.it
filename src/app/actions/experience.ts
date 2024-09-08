"use server"

import { cookies } from "next/headers"

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
