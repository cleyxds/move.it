import { redirect } from "next/navigation"

import { isAuthenticated } from "@/app/actions/auth"

export default async function RedirectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const authenticated = await isAuthenticated()

  if (authenticated) return redirect("/pomodoro")

  return children
}
