import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"

import SideBarLogo from "@/assets/side-bar-logo"

import HomeIcon from "@/assets/icons/home"
import RankingIcon from "@/assets/icons/ranking"
import Link from "next/link"

export default function SideBar() {
  return (
    <Stack
      component="aside"
      maxWidth="7rem"
      minHeight="100dvh"
      bgcolor="common.white"
      padding={4}
      position="relative"
    >
      <SideBarLogo pointerEvents="none" />

      <Stack
        position="absolute"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        sx={{ inset: "0" }}
      >
        <IconButton LinkComponent={Link} href="/">
          <HomeIcon />
        </IconButton>

        <IconButton LinkComponent={Link} href="ranking">
          <RankingIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
