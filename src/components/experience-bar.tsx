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
      position={{
        xs: "sticky",
        sm: "sticky",
        md: "absolute",
        lg: "absolute",
      }}
      component="header"
      gap="1rem"
      direction="row"
      alignItems="center"
      sx={{
        top: "1.5rem",
        left: {
          xs: "1rem",
          sm: "0",
          md: "0",
          lg: "0",
        },
        right: {
          xs: "1rem",
          sm: "2rem",
          md: "6rem",
          lg: "10rem",
        },
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
            transition: "width 0.5s ease-in-out",
          }}
        />

        <Typography
          component="span"
          position="absolute"
          fontWeight="500"
          fontSize=".875rem"
          fontFamily="var(--font-inter)"
          textAlign="center"
          width="max-content"
          top="12px"
          sx={{
            transform: "translateX(-50%)",
            left: `${percentToNextLevel}%`,
            transition: "left 0.5s ease-in-out",
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
