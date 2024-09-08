import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const format = (number: number) => String(number).padStart(2, "0")

export default function CompletedChallenges({
  challengesCompleted,
}: {
  challengesCompleted: number
}) {
  return (
    <Stack
      gap="2rem"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      margin="3.5rem 0"
      paddingBottom="1rem"
      borderBottom="1px solid #D7D8DA"
    >
      <Typography
        fontSize="1.125rem"
        lineHeight="1.5rem"
        fontFamily="var(--font-inter)"
        fontWeight="500"
        sx={{
          color: "#666666",
        }}
      >
        Desafios completados
      </Typography>

      <Typography
        fontSize="1.5rem"
        fontFamily="var(--font-inter)"
        fontWeight="500"
        sx={{
          color: "#666666",
        }}
      >
        {format(challengesCompleted)}
      </Typography>
    </Stack>
  )
}
