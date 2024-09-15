import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import MUIImage from "@/components/mui-image"
import EnterButton from "./enter-button"

import { isAuthenticated } from "../actions/auth"

import Logo from "@/assets/logo"
import GithubIcon from "@/assets/icons/github"
import MoveitBackground from "@/assets/images/moveit-background.webp"

export default async function LoginPage() {
  const authenticated = await isAuthenticated()

  return (
    <Container sx={{ bgcolor: "blue.main" }}>
      <Stack flex={1} direction="row" alignItems="center">
        <Stack flex={1}>
          <MUIImage
            width={768}
            height={660}
            src={MoveitBackground}
            alt="Move.it background"
          />
        </Stack>

        <Stack flex={1} alignItems="center" gap="2rem">
          <Stack alignItems="center" gap="1rem">
            <Logo />

            <Typography
              fontSize="2.25rem"
              lineHeight="2.875rem"
              fontWeight="600"
              color="common.white"
            >
              Bem-vindo
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap="1rem">
            <GithubIcon />

            <Typography color="textHighlight.main">
              Faça login com seu Github para começar
            </Typography>
          </Stack>

          <EnterButton authenticated={authenticated} />
        </Stack>
      </Stack>
    </Container>
  )
}
