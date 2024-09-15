type ExperienceStatus = {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel?: number
  rest: boolean
}

type Challenge = {
  type: "body" | "eye" | "rest"
  description: string
  amount: number
}
