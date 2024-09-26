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
import LeaderboardIcon from "@/assets/icons/leaderboard"

export default function SideBar() {
  const pathname = usePathname()

  const top = {
    "/pomodoro": "41.5%",
    "/leaderboard": "50.5%",
  }[pathname]

  return (
    <Stack
      component="aside"
      minWidth={{
        xs: "100%",
        sm: "7rem",
      }}
      maxWidth={{
        xs: "100%",
        sm: "7rem",
      }}
      minHeight={{
        xs: "6rem",
      }}
      bgcolor="common.white"
      padding="2rem"
      zIndex={1}
      position={{
        xs: "fixed",
        sm: "relative",
      }}
      bottom={{
        xs: "0",
        sm: "unset",
      }}
    >
      <Stack
        component={Link}
        href="/"
        zIndex={1}
        sx={{
          pointerEvents: {
            xs: "none",
            sm: "auto",
          },
        }}
      >
        <SideBarLogo />
      </Stack>

      <Stack
        position="absolute"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        flexDirection={{
          xs: "row",
          sm: "column",
        }}
        sx={{ inset: "0" }}
      >
        <PathIndicator
          top={top}
          display={{
            xs: "none",
            sm: "block",
          }}
        />

        <IconButton
          LinkComponent={Link}
          href="pomodoro"
          sx={{
            svg: {
              path: {
                stroke:
                  pathname === "/pomodoro"
                    ? theme.palette.blue.main
                    : theme.palette.texts.main,
              },
            },
          }}
        >
          <HomeIcon />
        </IconButton>

        <IconButton
          LinkComponent={Link}
          href="leaderboard"
          sx={{
            svg: {
              path: {
                stroke:
                  pathname === "/leaderboard"
                    ? theme.palette.blue.main
                    : theme.palette.texts.main,
              },
            },
          }}
        >
          <LeaderboardIcon />
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
