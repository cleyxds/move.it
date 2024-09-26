"use client"

import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import MUIImage from "@/components/mui-image"
import { CTAButton } from "@/components/challenge-box"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: {
    xs: "80%",
    sm: "80%",
    md: "80%",
    lg: "50%",
  },
  width: "100px",
  bgcolor: "background.paper",
  borderRadius: ".3125rem",
  overflow: "hidden",
  boxShadow: 24,
}

type ModalChallengeBoxProps = {
  open: boolean
  activeChallenge: Challenge | null
  isRestChallenge: boolean
  onSucceeded: () => void
  isActiveCycle: boolean
  onFailed: () => void
  startRestCountdown: () => void
}
export default function ModalChallengeBox({
  open,
  activeChallenge,
  isRestChallenge,
  onSucceeded: challengeSucceeded,
  onFailed: challengeFailed,
  startRestCountdown,
  isActiveCycle,
}: ModalChallengeBoxProps) {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-challenge-box-title"
      aria-describedby="modal-challenge-box-description"
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "flex",
          lg: "none",
        },
      }}
    >
      <Box sx={style}>
        {activeChallenge ? (
          <>
            {isRestChallenge ? (
              <Stack
                alignItems="center"
                justifyContent="center"
                flex={1}
                gap="2rem"
              >
                <MUIImage
                  width={140}
                  height={112}
                  src={`icons/${activeChallenge.type}.svg`}
                  alt={`Icon: ${activeChallenge.type}`}
                />

                <Typography
                  component="strong"
                  fontSize="1.5rem"
                  fontWeight="500"
                  fontFamily="var(--font-inter)"
                  lineHeight="1.4"
                >
                  Tempo de descanso
                </Typography>

                {isActiveCycle ? (
                  <CTAButton
                    type="button"
                    onClick={startRestCountdown}
                    sx={{
                      width: "100%",
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
                  </CTAButton>
                ) : (
                  <CTAButton
                    type="button"
                    onClick={startRestCountdown}
                    sx={{
                      backgroundColor: "blue.main",
                      color: "common.white",
                      width: "100%",
                    }}
                  >
                    Iniciar ciclo de descanso
                  </CTAButton>
                )}
              </Stack>
            ) : (
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
                    textAlign="center"
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
                      textAlign="center"
                    >
                      Novo desafio
                    </Typography>

                    <Typography lineHeight="1.5">
                      {activeChallenge.description}
                    </Typography>
                  </Stack>
                </Stack>

                <Box display="grid" gridTemplateColumns="1fr 1fr">
                  <CTAButton
                    type="button"
                    onClick={challengeFailed}
                    sx={{
                      backgroundColor: "rgb(255, 245, 245)",
                      color: "rgb(255, 67, 67)",
                    }}
                  >
                    Falhei
                  </CTAButton>

                  <CTAButton
                    type="button"
                    onClick={challengeSucceeded}
                    sx={{
                      backgroundColor: "rgb(247, 255, 245)",
                      color: "rgb(63, 176, 35)",
                    }}
                  >
                    Completei
                  </CTAButton>
                </Box>
              </Stack>
            )}
          </>
        ) : (
          <Stack alignItems="center" width="80%">
            <Typography
              component="strong"
              fontSize="1.5rem"
              fontWeight="500"
              fontFamily="var(--font-inter)"
              lineHeight="1.4"
            >
              Finalize um ciclo para receber um desafio
            </Typography>

            <Typography
              component="p"
              display="flex"
              flexDirection="column"
              alignItems="center"
              fontFamily="var(--font-inter)"
              fontSize="1rem"
              lineHeight="1.625rem"
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
              Avance de level completando os desafios
            </Typography>
          </Stack>
        )}
      </Box>
    </Modal>
  )
}
