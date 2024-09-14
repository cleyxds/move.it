"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import { ChallengeContext } from "@/contexts/challenges-context"

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

const pomodoro25Min = 25 * 60 // 25 minutos em segundos

export default function CountdownProvider({
  children,
}: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(pomodoro25Min)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null) // Timestamp de quando o countdown começa

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
    setStartTime(Date.now()) // Armazena o timestamp atual
  }

  function resetCountdown() {
    setIsActive(false)
    setTime(pomodoro25Min) // Reseta para 25 minutos
    setHasFinished(false)
    setStartTime(null) // Reseta o timestamp
  }

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout

    if (isActive && startTime) {
      countdownInterval = setInterval(() => {
        // Calcula o tempo decorrido
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000) // Diferença em segundos
        const newTime = pomodoro25Min - elapsedTime

        if (newTime > 0) {
          setTime(newTime)
        } else {
          clearInterval(countdownInterval)
          setTime(0)
          setIsActive(false)
          setHasFinished(true)
          startNewChallenge() // Inicia o novo desafio
        }
      }, 1000)
    }

    return () => clearInterval(countdownInterval) // Limpa o intervalo ao desmontar ou ao reiniciar o countdown
  }, [isActive, startTime])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
