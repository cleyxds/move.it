"use client"

import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles"

import { css } from "@mui/material/styles"

import { Inter, Rajdhani } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["600"],
})

const screen = css`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  margin: 0;
  min-height: 100dvh;
  max-width: 100% !important;
`

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
    grayLine: {
      main: "#DCDDE0",
    },
    background: {
      default: "#F2F3F5",
    },
    textHighlight: {
      main: "#B3B9FF",
    },
    title: {
      main: "#2E384D",
    },
    red: {
      main: "#E83F5B",
    },
    green: {
      main: "#4CD62B",
    },
    blue: {
      main: "#5965E0",
    },
    blueDark: {
      main: "#4953B8",
    },
    blueTwitter: {
      main: "#2AA9E0",
    },
  },
  typography: {
    fontFamily: [inter.style.fontFamily, rajdhani.style.fontFamily].join(","),
  },
  components: {
    MuiContainer: {
      defaultProps: {
        component: "main",
      },
      styleOverrides: {
        root: screen,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
})

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true
    rect: true
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    grayLine: PaletteColor
    textHighlight: PaletteColor
    title: PaletteColor
    red: PaletteColor
    green: PaletteColor
    blue: PaletteColor
    blueDark: PaletteColor
    blueTwitter: PaletteColor
  }

  interface PaletteOptions {
    grayLine: PaletteColorOptions
    textHighlight: PaletteColorOptions
    title: PaletteColorOptions
    red: PaletteColorOptions
    green: PaletteColorOptions
    blue: PaletteColorOptions
    blueDark: PaletteColorOptions
    blueTwitter: PaletteColorOptions
  }
}

export const fontVariants = [inter.variable, rajdhani.variable].join(" ")

export default theme
