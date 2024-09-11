import Stack from "@mui/material/Stack"

import Profile from "@/components/profile"
import Countdown from "@/components/countdown"
import ChallengeBox from "@/components/challenge-box"
import ExperienceBar from "@/components/experience-bar"
import CompletedChallenges from "@/components/completed-challenges"

import { getUserDetails } from "@/app/actions/user"

export default async function IndexPage() {
  const user = await getUserDetails()

  const status: ExperienceStatus = {
    level: user?.level!,
    currentExperience: user?.currentExperience!,
    challengesCompleted: user?.challengesCompleted!,
    experienceToNextLevel: Math.pow((Number(user?.level!) + 1) * 4, 2),
  }

  return (
    <Stack
      position="relative"
      justifyContent="center"
      paddingRight="10rem"
      flex={1}
    >
      <ExperienceBar {...status} />

      <Stack component="section" direction="row" gap="8rem" pt="2rem">
        <Stack flex={1}>
          <Profile level={status.level} />

          <CompletedChallenges
            challengesCompleted={status.challengesCompleted}
          />

          <Countdown />
        </Stack>

        <Stack flex={1}>
          <ChallengeBox />
        </Stack>
      </Stack>
    </Stack>
  )
}
