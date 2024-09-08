import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

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
    signIn: async ({ user, account, profile, email, credentials }) => {
      return true
    },
    redirect: async () => "/pomodoro",
  },
})

export { handler as GET, handler as POST }
