"use client"

import { createContext, ReactNode, useEffect, useState } from "react"

// import { LevelUpModal } from '../components/LevelUpModal';

import {
  onLevelUp,
  onUpdateExperienceAndChallengesCompleted,
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
  ...rest
}: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )

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

      await onLevelUp()
      setIsLevelUpModalOpen(true)
    }

    await onUpdateExperienceAndChallengesCompleted(finalExperience)
    setActiveChallenge(null)
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
      }}
    >
      {children}

      {/* { isLevelUpModalOpen && <LevelUpModal />} */}
    </ChallengeContext.Provider>
  )
}
