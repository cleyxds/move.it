import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leaderboard | move.it",
}

export default function LeaderboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
