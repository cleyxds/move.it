import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pomodoro | move.it",
}

export default async function PomodoroLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
