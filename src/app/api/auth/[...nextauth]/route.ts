import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { createUserDetails } from "@/app/actions/user"

import { SocialProfile } from "@/types/auth"

const GITHUB_ID = process.env.GITHUB_ID as string
const GITHUB_SECRET = process.env.GITHUB_SECRET as string

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ profile, account }) => {
      if (!account || !profile) return "/"

      const provider = account.provider

      // prettier-ignore
      return await createUserDetails(provider, profile as SocialProfile).then( () => true)
    },
    redirect: async () => "/pomodoro",
  },
})

export { handler as GET, handler as POST }
