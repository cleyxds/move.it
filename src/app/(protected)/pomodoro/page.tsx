import Stack from "@mui/material/Stack"

import ChallengesProvider from "@/contexts/challenges-context"
import CountdownProvider from "@/contexts/countdown-context"

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
    rest: user?.rest!,
  }

  return (
    <ChallengesProvider
      level={status.level}
      rest={status.rest}
      currentExperience={status.currentExperience}
      challengesCompleted={status.challengesCompleted}
    >
      <CountdownProvider rest={status.rest}>
        <Stack
          position="relative"
          justifyContent="center"
          padding={{
            xs: "1rem",
            sm: "0",
            md: "0",
            lg: "0",
          }}
          paddingRight={{
            sm: "2rem",
            md: "6rem",
            lg: "10rem",
          }}
          flex={1}
        >
          <ExperienceBar {...status} />

          <Stack
            component="section"
            direction={{ xs: "column", lg: "row" }}
            gap={{
              xs: "8rem",
              sm: "0",
              md: "0",
              lg: "8rem",
            }}
            pt={{ xs: "6rem", lg: "2rem" }}
          >
            <Stack flex={1}>
              <Profile user={user} />

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
      </CountdownProvider>
    </ChallengesProvider>
  )
}
