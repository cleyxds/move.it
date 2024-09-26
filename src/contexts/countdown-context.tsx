"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useReducer,
  DispatchWithoutAction,
} from "react"

import { ChallengeContext } from "@/contexts/challenges-context"
import wrapFunctionality from "@/utils/wrap-functionality"

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
  startRestCountdown: () => void
  toggleRestEnabled: DispatchWithoutAction
  rest: boolean
}

type CountdownProviderProps = {
  children: ReactNode
  rest: boolean
}

export const CountdownContext = createContext({} as CountdownContextData)

const pomodoro25Min = 25 * 60 // 25 minutos em segundos
const rest5Min = 5 * 60 // 5 minutos em segundos

export default function CountdownProvider({
  children,
  rest: restEnabledInitial,
}: CountdownProviderProps) {
  const {
    startNewChallenge,
    startRestChallenge,
    activeChallenge,
    resetChallenge,
  } = useContext(ChallengeContext)

  const [time, setTime] = useState(pomodoro25Min)
  const [rest, toggleRestEnabled] = useReducer(
    (state) => !state,
    restEnabledInitial
  )
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null) // Timestamp de quando o countdown começa

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
    setStartTime(Date.now()) // Armazena o timestamp atual
  }

  function startRestCountdown() {
    setTime(rest5Min)
    setIsActive(false)
    setHasFinished(false)
    setStartTime(Date.now())
    startRestChallenge()
  }

  function resetCountdown() {
    if (activeChallenge?.type === "rest") {
      resetChallenge()
    }
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
        const newTime = time - elapsedTime

        if (newTime > 0) {
          setTime(newTime)
        } else {
          clearInterval(countdownInterval)
          setTime(0)
          setIsActive(false)
          setHasFinished(true)

          if (activeChallenge?.type === "rest") {
            // Se o desafio for de descanso, reseta o countdown e o desafio de descanso

            wrapFunctionality("Audio", () => {
              new Audio("/notification.mp3").play()
            })

            wrapFunctionality("Notification", () => {
              if (Notification.permission === "granted") {
                new Notification("Tempo de descanso acabou 🥲")
              }
            })

            resetCountdown()
            resetChallenge()
          } else {
            startNewChallenge() // Inicia o novo desafio
          }
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
        startRestCountdown,
        toggleRestEnabled,
        rest,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
