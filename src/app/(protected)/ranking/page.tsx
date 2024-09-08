import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function RankingPage() {
  return (
    <Stack paddingTop="1.5rem">
      <Stack>
        <Typography
          fontSize="2.25rem"
          lineHeight="2.875rem"
          fontFamily="var(--font-inter)"
          color="title"
        >
          Leaderboard
        </Typography>
      </Stack>
    </Stack>
  )
}
