import NextAuth from "next-auth"
import GithubProvider, { GithubProfile } from "next-auth/providers/github"

import { createUserDetails } from "@/app/actions/user"

const GITHUB_ID = process.env.GITHUB_ID as string
const GITHUB_SECRET = process.env.GITHUB_SECRET as string

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ profile }) => {
      if (!profile) return "/"

      return await createUserDetails(profile as GithubProfile).then(() => true)
    },
    redirect: async () => "/pomodoro",
  },
})

export { handler as GET, handler as POST }
