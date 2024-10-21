import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import ReactQueryProvider from "./react-query-provider"

import theme, { fontVariants } from "../theme"

export const metadata: Metadata = {
  title: "move.it",
  description:
    "O move.it é um app que une a técnica de Pomodoro com a realização de exercícios físicos para quem passa muito tempo na frente do computador.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontVariants}>
      <body>
        <AppRouterCacheProvider>
          <ReactQueryProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </ReactQueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
