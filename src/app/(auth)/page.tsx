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
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        gap={{ md: "2rem", lg: "0rem" }}
      >
        <Stack
          position="relative"
          width={{
            md: 768,
            lg: 768,
          }}
          height={{
            md: 660,
            lg: 660,
          }}
          flex={{
            lg: 1,
            md: 1,
            sm: 0,
          }}
        >
          <MUIImage
            fill
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1199px) 768px, 768px"
            src={MoveitBackground}
            alt="Move.it background"
            sx={{
              objectFit: {
                md: "scale-down",
                lg: "unset",
              },
            }}
          />
        </Stack>

        <Stack flex={1} alignItems="center" gap="2rem">
          <Stack alignItems="center" gap="1rem">
            <Logo
              sx={{
                width: {
                  xs: 250,
                  sm: 360,
                },
              }}
            />

            <Typography
              fontSize={{ xs: "2rem", sm: "2.25rem" }}
              lineHeight={{ xs: "2.5rem", sm: "2.875rem" }}
              fontWeight="600"
              color="common.white"
            >
              Bem-vindo
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap="1rem">
            <Typography color="textHighlight.main">
              Faça login para começar
            </Typography>
          </Stack>

          <EnterButton authenticated={authenticated} />
        </Stack>
      </Stack>
    </Container>
  )
}
