"use client"

import { signIn } from "next-auth/react"

import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import MUIImage from "@/components/mui-image"

import Logo from "@/assets/logo"
import GithubIcon from "@/assets/icons/github"
import MoveitBackground from "@/assets/images/moveit-background.webp"

export default function LoginPage() {
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

          <Button
            onClick={() => signIn("github")}
            sx={{
              height: "5rem",
              borderRadius: ".3125rem",
              fontSize: "1.125rem",
              bgcolor: "common.white",
              color: "blueDark.main",
              width: "50%",
              gap: "0.5rem",
              transition: "background-color 0.3s",

              "&:hover": {
                transition: "background-color 0.3s",
                bgcolor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            Entrar usando Github{" "}
            <GithubIcon width={24} height={24} viewBox="0 0 40 40" />
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}
