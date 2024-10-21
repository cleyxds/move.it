import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import ReactQueryProvider from "./react-query-provider"

import theme, { fontVariants } from "../theme"

export const metadata: Metadata = {
  title: "move.it",
  description:
    "O move.it é um sistema de pomodoro voltado para desenvolvedores que desejam melhorar sua saúde enquanto codam. Oferece exercícios físicos, de visão e pausas produtivas durante suas sessões de trabalho, ajudando a manter o foco e o bem-estar.",
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
