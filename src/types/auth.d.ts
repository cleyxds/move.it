import { GithubProfile } from "next-auth/providers/github"
import { GoogleProfile } from "next-auth/providers/google"

type SocialProfile = GoogleProfile | GithubProfile

type Profile = {
  provider: string
}

type UserDetailsGithubProfile = {
  login: string
  company: string
  avatar_url: string
  name: string
  email: string
} & Profile

type UserDetailsGoogleProfile = {
  login: string
  avatar_url: string
  name: string
  email: string
} & Profile

type UserDetailsProfileData =
  | UserDetailsGithubProfile
  | UserDetailsGoogleProfile
