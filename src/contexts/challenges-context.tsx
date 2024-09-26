"use client"

import { createContext, ReactNode, useEffect, useState } from "react"

import LevelUpModal from "@/components/level-up-modal"

import {
  levelUp,
  revalidatePomodoro,
  updateExperienceAndChallengesCompleted,
} from "@/app/actions/experience"

import wrapFunctionality from "@/utils/wrap-functionality"

import challenges from "../../challenges.json"

type ChallengesContextData = {
  level: number
  currentExperience: number
  experienceToNextLevel: number
  challengesCompleted: number
  startNewChallenge: () => void
  activeChallenge: Challenge | null
  resetChallenge: () => void
  startRestChallenge: () => void
  completeChallenge: () => Promise<void>
  handleCloseLevelUpModal: () => void
  handleChallengeFailed: () => Promise<void>
  handleChallengeSucceeded: () => Promise<void>
  isLevelUpModalOpen: boolean
}

type ChallengeProviderProps = {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
  rest: boolean
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export default function ChallengesProvider({
  children,
  level,
  currentExperience,
  challengesCompleted,
  rest,
}: ChallengeProviderProps) {
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    wrapFunctionality("Notification", () => {
      Notification.requestPermission()
    })
  }, [])

  function handleCloseLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge

    setActiveChallenge(challenge)

    wrapFunctionality("Audio", () => {
      new Audio("/notification.mp3").play()
    })

    wrapFunctionality("Notification", () => {
      if (Notification.permission === "granted") {
        new Notification("Novo desafio 🎉", {
          body: `Valendo ${challenge.amount} xp!`,
        })
      }
    })
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function startRestChallenge() {
    const rest_challenge = {
      type: "rest",
      description: "Descanse por 5 minutos",
      amount: 0,
    } as Challenge

    setActiveChallenge(rest_challenge)
  }

  async function completeChallenge() {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel

      await levelUp()

      wrapFunctionality("Audio", async () => {
        const TADA = new Audio("/tada.mp3")
        TADA.volume = 0.25
        await TADA.play()
      })

      setIsLevelUpModalOpen(true)
    }

    await updateExperienceAndChallengesCompleted({
      currentExperience: finalExperience,
    })

    revalidatePomodoro()
  }

  function handleChallengeSucceeded() {
    return new Promise<void>(async (resolve, reject) => {
      await completeChallenge()

      if (rest) {
        resolve()
      } else {
        reject()
      }
    })
  }

  function handleChallengeFailed() {
    return new Promise<void>((resolve) => {
      resetChallenge()
      resolve()
    })
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        startNewChallenge,
        startRestChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        handleCloseLevelUpModal,
        isLevelUpModalOpen,
        handleChallengeSucceeded,
        handleChallengeFailed,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}
