"use client"

import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

import PlayIcon from "@/assets/icons/play"

// import { useContext } from "react"
// import { CountdownContext } from "../contexts/CountdownContext"

// import styles from "../styles/comcpponents/Countdown.module.css"

export default function Countdown() {
  return (
    <>
      <Stack direction="row" alignItems="center" color="var(--title)">
        <DigitHolder direction="row" bgcolor="common.white">
          <Digit>2</Digit>
          <DigitDivider variant="fullWidth" orientation="vertical" />
          <Digit>5</Digit>
        </DigitHolder>

        <Digit sx={{ margin: "0 0.5rem" }}>:</Digit>

        <DigitHolder direction="row" bgcolor="common.white">
          <Digit>0</Digit>
          <DigitDivider variant="fullWidth" orientation="vertical" />
          <Digit>0</Digit>
        </DigitHolder>
      </Stack>

      <Stack>
        <CountdownButton
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
      </Stack>
    </>
  )
}

const Digit = styled(Typography)`
  /* border: 1px solid #f0f1f3; */
  font-family: var(--font-rajdhani);
  font-size: 7.5rem;
  line-height: 100px;
  font-weight: 600;
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
