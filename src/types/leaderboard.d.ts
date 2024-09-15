type LeaderboardRow = {
  id: string
  position: number
  user: LeadershipUser
  challenges: number
  total_experience: number
}

type LeadershipUser = {
  name: string
  avatar_url?: string
  level: number
  slug: string
  me?: boolean
}
