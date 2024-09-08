"use client"

import Button from "@mui/material/Button"

import LogoutIcon from "@mui/icons-material/Logout"

import { signOut } from "next-auth/react"

export default function Logout() {
  return (
    <Button
      startIcon={<LogoutIcon />}
      onClick={() => signOut()}
      sx={{
        p: 1.25,
        backgroundColor: "red.main",
        color: "common.white",
      }}
    >
      Sair
    </Button>
  )
}
