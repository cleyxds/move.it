"use client"

import { useContext } from "react"

import { styled } from "@mui/material"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

import PlayIcon from "@/assets/icons/play"
import CloseIcon from "@/assets/icons/close"
import CheckIcon from "@/assets/icons/check"

// import { useContext } from "react"
import { CountdownContext } from "@/contexts/countdown-context"

// import styles from "../styles/comcpponents/Countdown.module.css"

export default function Countdown() {
  const {
    startCountdown,
    resetCountdown,
    hasFinished,
    isActive,
    minutes,
    seconds,
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

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

      <Stack>
        {hasFinished ? (
          <CountdownButton
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
            Ciclo encerrado{" "}
            <Stack padding="5px">
              <CheckIcon />
            </Stack>
          </CountdownButton>
        ) : (
          <>
            {isActive ? (
              <CountdownButton
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
                Abandonar ciclo{" "}
                <Stack padding="5px">
                  <CloseIcon />
                </Stack>
              </CountdownButton>
            ) : (
              <CountdownButton
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
                Iniciar um ciclo <PlayIcon />
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
  margin-top: 2rem;
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

// const {
//   minutes,
//   seconds,
//   hasFinished,
//   isActive,
//   startCountdown,
//   resetCountdown,
// } = useContext(CountdownContext)

// const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
// const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

// return (
//   <div>
//     <div className={styles.countdownContainer}>
//       <div>
//         <span>{minuteLeft}</span>
//         <span>{minuteRight}</span>
//       </div>
//       <span>:</span>
//       <div>
//         <span>{secondLeft}</span>
//         <span>{secondRight}</span>
//       </div>
//     </div>

//     {hasFinished ? (
//       <button disabled className={styles.countdownButton}>
//         Ciclo encerrado
//       </button>
//     ) : (
//       <>
//         {isActive ? (
//           <button
//             type="button"
//             className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
//             onClick={resetCountdown}
//           >
//             Abandonar ciclo
//           </button>
//         ) : (
//           <button
//             type="button"
//             className={styles.countdownButton}
//             onClick={startCountdown}
//           >
//             Iniciar um ciclo
//           </button>
//         )}
//       </>
//     )}
//   </div>
// )
