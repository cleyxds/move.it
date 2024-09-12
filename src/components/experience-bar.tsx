import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function ExperienceBar({
  currentExperience,
  experienceToNextLevel,
}: ExperienceStatus) {
  // prettier-ignore
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel!

  return (
    <Stack
      position="absolute"
      component="header"
      gap="1rem"
      direction="row"
      alignItems="center"
      sx={{
        top: "1.5rem",
        left: "0",
        right: "10rem",
      }}
    >
      <Typography
        fontSize=".875rem"
        fontFamily="var(--font-inter)"
        component="span"
      >
        0 xp
      </Typography>

      <Stack
        position="relative"
        height=".25rem"
        borderRadius=".25rem"
        bgcolor="grayLine.main"
        marginX="0 1.5rem"
        flex={1}
      >
        <Box
          height=".25rem"
          borderRadius=".25rem"
          bgcolor="green.main"
          sx={{
            width: `${percentToNextLevel}%`,
          }}
        />

        <Typography
          component="span"
          position="absolute"
          fontWeight="500"
          fontSize=".875rem"
          fontFamily="var(--font-inter)"
          textAlign="center"
          top="12px"
          sx={{
            transform: "translateX(-50%)",
            left: `${percentToNextLevel}%`,
          }}
        >
          {currentExperience} xp
        </Typography>
      </Stack>

      <Typography
        fontSize=".875rem"
        fontFamily="var(--font-inter)"
        component="span"
      >
        {experienceToNextLevel} xp
      </Typography>
    </Stack>
  )
}
