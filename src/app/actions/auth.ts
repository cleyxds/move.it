"use server"

import { redirect } from "next/navigation"

import { getServerSession } from "next-auth"

export async function isAuthenticated() {
  const session = await getServerSession()
  return !!session
}

export async function redirectToPomodoro() {
  const authenticated = await isAuthenticated()

  if (!authenticated) return redirect("/")

  redirect("/pomodoro")
}
