type ExperienceStatus = {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel?: number
}

type Challenge = {
  type: "body" | "eye"
  description: string
  amount: number
}
