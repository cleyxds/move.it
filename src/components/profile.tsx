import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import MUIImage from "@/components/mui-image"
import Logout from "@/components/logout"

export default function Profile({ user }: { user: User | null }) {
  const name = user?.name as string
  const image = user?.avatar_url as string
  const level = user?.level as number

  if (!name || !image) return null

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center">
        <MUIImage
          src={image}
          alt="Profile image"
          width={88}
          height={88}
          sx={{
            borderRadius: "9999px",
          }}
        />

        <Stack marginLeft="1.5rem">
          <Typography
            component="strong"
            fontSize="1.5rem"
            fontFamily="var(--font-inter)"
            fontWeight="600"
            color="title"
          >
            {name}
          </Typography>

          <Typography
            component="p"
            fontSize="1rem"
            fontFamily="var(--font-inter)"
            fontWeight="400"
            sx={{
              color: "#666666",
            }}
          >
            <MUIImage
              src="icons/level.svg"
              alt="Level"
              width={14}
              height={16}
              sx={{ marginRight: "0.5rem" }}
            />
            Level {level}
          </Typography>
        </Stack>
      </Stack>

      <Logout />
    </Stack>
  )
}
