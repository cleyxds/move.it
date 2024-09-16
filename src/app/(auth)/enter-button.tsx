"use client"

import Link from "next/link"

import { signIn } from "next-auth/react"

import { styled } from "@mui/material"
import MUIButton from "@mui/material/Button"

import theme from "@/theme"

import GithubIcon from "@/assets/icons/github"

export default function EnterButton({
  authenticated,
}: {
  authenticated: boolean
}) {
  if (authenticated) {
    return (
      <Button LinkComponent={Link} href="pomodoro">
        Entrar
      </Button>
    )
  }

  return (
    <Button
      onClick={() => signIn("github")}
      endIcon={<GithubIcon width={24} height={24} viewBox="0 0 40 40" />}
    >
      Entrar usando Github
    </Button>
  )
}

const Button = styled(MUIButton)({
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },

  height: "5rem",
  borderRadius: ".3125rem",
  fontSize: "1.125rem",
  backgroundColor: theme.palette.common.white,
  color: theme.palette.blueDark.main,
  gap: "0.5rem",
  transition: "background-color 0.3s, width 0.3s",

  "&:hover": {
    transition: "background-color 0.3s, width 0.3s",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
})
