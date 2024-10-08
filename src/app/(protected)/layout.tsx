import { redirect } from "next/navigation"

import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import SideBar from "@/components/side-bar"

import { isAuthenticated } from "@/app/actions/auth"

const container_sx = {
  p: "0 !important",
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
    md: "row",
    lg: "row",
  },
  gap: {
    sm: "2rem",
    md: "6rem",
    lg: "10rem",
  },
}

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const authenticated = await isAuthenticated()

  if (!authenticated) redirect("/")

  return (
    <Container component={Stack} sx={container_sx}>
      <SideBar />

      {children}
    </Container>
  )
}
