import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leaderboard | move.it",
}

export default function PomodoroLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
