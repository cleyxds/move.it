"use client"

import { useContext } from "react"
import { ChallengeContext } from "../contexts/ChallengesContext"
import { CountdownContext } from "../contexts/CountdownContext"

import MUIImage from "@/components/mui-image"

import { styled } from "@mui/material"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export default function ChallengeBox() {
  // const { activeChallenge, resetChallenge, completeChallenge } =
  //   useContext(ChallengeContext)
  // const { resetCountdown } = useContext(CountdownContext)

  // function handleChallengeSucceeded() {
  //   completeChallenge()
  //   resetCountdown()
  // }

  // function handleChallengeFailed() {
  //   resetChallenge()
  //   resetCountdown()
  // }

  const activeChallenge = {
    type: "body",
    description:
      "É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.",
    amount: 400,
  }

  function handleChallengeSucceeded() {
    console.log("handleChallengeSucceeded")
  }

  function handleChallengeFailed() {
    console.log("handleChallengeFailed")
  }

  return (
    <Stack
      height="100%"
      bgcolor="var(--white)"
      borderRadius="5px"
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      padding="0"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {activeChallenge ? (
        <Stack height="100%">
          <Stack padding="1.75rem 3rem" height="100%" gap="2rem">
            <Box
              component="header"
              color="var(--blue)"
              fontWeight="600"
              fontSize="1.25rem"
              padding="0 0 1.5rem"
              borderBottom="1px solid var(--gray-line)"
              width="100%"
            >
              Ganhe {activeChallenge.amount} xp
            </Box>

            <Stack alignItems="center" justifyContent="center" flex={1}>
              <MUIImage
                width={140}
                height={112}
                src={`icons/${activeChallenge.type}.svg`}
                alt={`Icon: ${activeChallenge.type}`}
              />

              <Typography
                fontSize="1.875rem"
                fontWeight="600"
                color="var(--title)"
                paddingTop="1.5rem"
                paddingBottom="0.5rem"
              >
                Novo desafio
              </Typography>

              <Typography width="70%" lineHeight="1.5">
                {activeChallenge.description}
              </Typography>
            </Stack>
          </Stack>

          <Box display="grid" gridTemplateColumns="1fr 1fr">
            <CTAButton
              type="button"
              onClick={handleChallengeFailed}
              sx={{
                backgroundColor: "rgb(255, 245, 245)",
                color: "rgb(255, 67, 67)",
              }}
            >
              Falhei
            </CTAButton>

            <CTAButton
              type="button"
              onClick={handleChallengeSucceeded}
              sx={{
                backgroundColor: "rgb(247, 255, 245)",
                color: "rgb(63, 176, 35)",
              }}
            >
              Completei
            </CTAButton>
          </Box>
        </Stack>
      ) : (
        <Stack alignItems="center">
          <Typography
            component="strong"
            fontSize="1.5rem"
            fontWeight="500"
            lineHeight="1.4"
          >
            Finalize um ciclo para receber um desafio
          </Typography>

          <Typography
            component="p"
            display="flex"
            flexDirection="column"
            alignItems="center"
            lineHeight="1.4"
            maxWidth="70%"
            marginTop="3rem"
            textAlign="center"
          >
            <MUIImage
              width={58.56}
              height={80}
              src="icons/level-up.svg"
              alt="Level Up"
              sx={{
                marginBottom: "1rem",
              }}
            />
            Avance de level completando desafios
          </Typography>
        </Stack>
      )}
    </Stack>
  )
}

const CTAButton = styled(Button)`
  height: 5rem;
  border: 0;
  border-radius: 0;
  font-size: 1.25rem;
  font-weight: 500;
  outline: 1px solid #dcdde0;
`
