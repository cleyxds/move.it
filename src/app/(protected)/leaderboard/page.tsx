import { Suspense } from "react"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Skeleton from "@mui/material/Skeleton"

import LeaderboardTable from "./leaderboard-table"

export default function LeaderboardPage() {
  return (
    <Stack paddingTop="1.5rem" paddingRight="10rem" flex={1} gap="1.5rem">
      <Typography
        fontSize="2.25rem"
        lineHeight="2.875rem"
        fontFamily="var(--font-inter)"
        color="title"
      >
        Leaderboard
      </Typography>

      <Suspense
        fallback={
          <Stack paddingTop="1.5rem" flex={1}>
            <Skeleton
              variant="rounded"
              height="95%"
              sx={{ bgcolor: "grayLine.main" }}
            />
          </Stack>
        }
      >
        <LeaderboardTable />
      </Suspense>
    </Stack>
  )
}
