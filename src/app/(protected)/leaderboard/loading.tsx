import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

export default function LeaderboardLoading() {
  return (
    <Stack paddingTop="1.5rem" paddingRight="10rem" flex={1}>
      <Skeleton
        variant="rounded"
        height="95%"
        sx={{ bgcolor: "grayLine.main" }}
      />
    </Stack>
  )
}
