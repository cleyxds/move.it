import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Share | move.it",
}

export default function LeaderboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
