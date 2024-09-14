"use client"

import Button from "@mui/material/Button"

export default function NotificationButton() {
  return (
    <Button
      type="button"
      onClick={() => {
        new Notification("Novo desafio 🎉", {
          body: `Valendo 0 xp!`,
        })
      }}
      sx={{
        height: "5.5rem",
        backgroundColor: "red.main",
      }}
    >
      Send Notification
    </Button>
  )
}
