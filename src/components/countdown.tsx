"use client"

import { useContext } from "react"

import { CountdownContext } from "@/contexts/countdown-context"

import { alpha, styled } from "@mui/material"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"

import theme from "@/theme"

import { toggleRest } from "@/app/actions/user"

import PlayIcon from "@/assets/icons/play"
import CloseIcon from "@/assets/icons/close"
import CheckIcon from "@/assets/icons/check"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

export default function Countdown() {
  const {
    startCountdown,
    resetCountdown,
    rest,
    toggleRestEnabled,
    hasFinished,
    isActive,
    minutes,
    seconds,
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

  function onToggleRest() {
    toggleRestEnabled()
    toggleRest()
  }

  return (
    <>
      <Stack direction="row" alignItems="center" color="var(--title)">
        <DigitHolder direction="row" bgcolor="common.white">
          <Digit flex={1}>{minuteLeft}</Digit>
          <DigitDivider variant="fullWidth" orientation="vertical" />
          <Digit flex={1}>{minuteRight}</Digit>
        </DigitHolder>

        <Digit sx={{ margin: "0 0.5rem" }}>:</Digit>

        <DigitHolder direction="row" bgcolor="common.white">
          <Digit flex={1}>{secondLeft}</Digit>
          <DigitDivider variant="fullWidth" orientation="vertical" />
          <Digit flex={1}>{secondRight}</Digit>
        </DigitHolder>
      </Stack>

      <Stack direction="row" alignItems="center">
        <FormControlLabel
          onChange={onToggleRest}
          checked={rest}
          control={
            <Switch
              inputProps={{ "aria-label": "rest-time-switch" }}
              sx={{
                marginY: "0.5rem",

                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: theme.palette.blueDark.main,
                  "&:hover": {
                    backgroundColor: alpha(
                      theme.palette.blueDark.main,
                      theme.palette.action.hoverOpacity
                    ),
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: theme.palette.blueDark.main,
                },
              }}
            />
          }
          label="Habilitar descanso"
          labelPlacement="end"
          sx={{ alignSelf: "flex-start", marginRight: ".25rem" }}
        />

        <Tooltip
          title="Descanso de 5 minutos após cada desafio"
          placement="top"
        >
          <IconButton>
            <HelpOutlineIcon
              sx={{
                width: "1.25rem",
                height: "1.25rem",
              }}
            />
          </IconButton>
        </Tooltip>
      </Stack>

      <Stack>
        {hasFinished ? (
          <CountdownButton
            endIcon={<CheckIcon />}
            disabled
            sx={{
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
              backgroundColor: "blue.main",
              color: "common.white",

              "&:not(:disabled):hover": {
                backgroundColor: "blueDark.main",
              },

              "&:disabled": {
                backgroundColor: "common.white",
                color: "text.primary",
                cursor: "not-allowed !important",
              },
            }}
          >
            <Stack position="absolute" bottom="0" left="0" right="0">
              <Box height="4px" bgcolor="green.main" />
            </Stack>
            Ciclo encerrado
          </CountdownButton>
        ) : (
          <>
            {isActive ? (
              <CountdownButton
                endIcon={<CloseIcon />}
                onClick={resetCountdown}
                sx={{
                  backgroundColor: "red.main",
                  color: "common.white",

                  "&:not(:disabled):hover": {
                    backgroundColor: "red.main",
                  },

                  "&:disabled": {
                    backgroundColor: "common.white",
                    color: "text.primary",
                    cursor: "not-allowed",
                  },
                }}
              >
                Abandonar ciclo
              </CountdownButton>
            ) : (
              <CountdownButton
                endIcon={<PlayIcon />}
                onClick={startCountdown}
                sx={{
                  backgroundColor: "blue.main",
                  color: "common.white",

                  "&:not(:disabled):hover": {
                    backgroundColor: "blueDark.main",
                  },

                  "&:disabled": {
                    backgroundColor: "common.white",
                    color: "text.primary",
                    cursor: "not-allowed",
                  },
                }}
              >
                Iniciar um ciclo
              </CountdownButton>
            )}
          </>
        )}
      </Stack>
    </>
  )
}

const Digit = styled(Typography)`
  font-family: var(--font-rajdhani);
  font-size: 7.5rem;
  line-height: 100px;
  font-weight: 600;
  text-align: center;
`

const DigitHolder = styled(Stack)`
  flex: 1;
  height: 9rem;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 0.3125rem;
`

const DigitDivider = styled(Divider)`
  width: 2px;
  background-color: #f0f1f3;
`

const CountdownButton = styled(Button)`
  width: 100%;
  height: 5rem;
  border: 0;
  border-radius: 0.3125rem;
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }

  &:disabled {
    background-color: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }
`
