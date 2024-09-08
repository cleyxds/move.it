import type { Metadata } from "next"

import CssBaseline from "@mui/material/CssBaseline"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { ThemeProvider } from "@mui/material/styles"

import ReactQueryProvider from "./react-query-provider"

import theme, { fontVariants } from "../theme"

export const metadata: Metadata = {
  title: "move.it",
  description:
    "Move.it é um aplicativo de comércio eletrônico de venda de joias online",
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
