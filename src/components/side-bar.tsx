"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"

import theme from "@/theme"

import SideBarLogo from "@/assets/side-bar-logo"
import HomeIcon from "@/assets/icons/home"
import RankingIcon from "@/assets/icons/ranking"

export default function SideBar() {
  const pathname = usePathname()

  const top = {
    "/pomodoro": "41.5%",
    "/leaderboard": "50.5%",
  }[pathname]

  return (
    <Stack
      component="aside"
      maxWidth="7rem"
      minHeight="100dvh"
      bgcolor="common.white"
      padding={4}
      position="relative"
    >
      <Stack component={Link} href="/" zIndex={1}>
        <SideBarLogo pointerEvents="none" />
      </Stack>

      <Stack
        position="absolute"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        sx={{ inset: "0" }}
      >
        <PathIndicator top={top} />

        <IconButton LinkComponent={Link} href="pomodoro">
          <HomeIcon />
        </IconButton>

        <IconButton LinkComponent={Link} href="leaderboard">
          <RankingIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}

const PathIndicator = styled(Box)({
  position: "absolute",
  left: 0,
  backgroundColor: theme.palette.blue.main,
  width: "0.25rem",
  height: "3.5rem",
  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
})
