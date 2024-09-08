import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import LeaderboardTable from "./leaderboard-table"

import { getLeaderboardData } from "@/app/actions/user"

export default async function LeaderboardPage() {
  const rows = await getLeaderboardData()

  return (
    <Stack paddingTop="1.5rem" paddingRight="10rem" flex={1}>
      <Typography
        fontSize="2.25rem"
        lineHeight="2.875rem"
        fontFamily="var(--font-inter)"
        color="title"
      >
        Leaderboard
      </Typography>

      <LeaderboardTable rows={rows} />
    </Stack>
  )
}
