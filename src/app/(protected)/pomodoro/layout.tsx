import { Metadata } from "next"

import ChallengesProvider from "@/contexts/ChallengesContext"
import CountdownProvider from "@/contexts/CountdownContext"

import { getUserDetails } from "@/app/actions/user"

export const metadata: Metadata = {
  title: "Início | move.it",
}

export default async function PomodoroLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUserDetails()

  const status: ExperienceStatus = {
    level: user?.level!,
    currentExperience: user?.currentExperience!,
    challengesCompleted: user?.challengesCompleted!,
    experienceToNextLevel: Math.pow((Number(user?.level!) + 1) * 4, 2),
  }

  return (
    <ChallengesProvider
      level={status.level}
      currentExperience={status.currentExperience}
      challengesCompleted={status.challengesCompleted}
    >
      <CountdownProvider>{children}</CountdownProvider>
    </ChallengesProvider>
  )
}
