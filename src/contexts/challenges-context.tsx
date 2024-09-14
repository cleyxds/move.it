"use client"

import { createContext, ReactNode, useEffect, useState } from "react"

import LevelUpModal from "@/components/level-up-modal"

import {
  levelUp,
  revalidatePomodoro,
  updateExperienceAndChallengesCompleted,
} from "@/app/actions/experience"

import challenges from "../../challenges.json"

type ChallengesContextData = {
  level: number
  currentExperience: number
  experienceToNextLevel: number
  challengesCompleted: number
  startNewChallenge: () => void
  activeChallenge: Challenge | null
  resetChallenge: () => void
  completeChallenge: () => void
  handleCloseLevelUpModal: () => void
  isLevelUpModalOpen: boolean
}

type ChallengeProviderProps = {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export default function ChallengesProvider({
  children,
  level,
  currentExperience,
  challengesCompleted,
}: ChallengeProviderProps) {
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function handleCloseLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge

    setActiveChallenge(challenge)

    new Audio("/notification.mp3").play()

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🎉", {
        body: `Valendo ${challenge.amount} xp!`,
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  async function completeChallenge() {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel

      await levelUp()
      const TADA = new Audio("/tada.mp3")
      TADA.volume = 0.25
      await TADA.play()
      setIsLevelUpModalOpen(true)
    }

    await updateExperienceAndChallengesCompleted({
      currentExperience: finalExperience,
    })
    setActiveChallenge(null)

    revalidatePomodoro()
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        handleCloseLevelUpModal,
        isLevelUpModalOpen,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}
