"use client"

import { useContext } from "react"
import { ChallengeContext } from "@/contexts/challenges-context"

import Stack from "@mui/material/Stack"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"

import MUIImage from "./mui-image"

import XIcon from "@/assets/icons/x"
import CloseIcon from "@/assets/icons/close"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "24.875rem",
  bgcolor: "common.white",
  borderRadius: ".3125rem",
}

const shareEnabled = false

export default function LevelUpModal() {
  const {
    level,
    handleCloseLevelUpModal: handleClose,
    isLevelUpModalOpen: open,
  } = useContext(ChallengeContext)

  return (
    <Modal
      open={open}
      aria-labelledby="level-up-modal-title"
      aria-describedby="level-up-modal-description"
    >
      <Stack sx={style}>
        <Stack padding="1rem" gap="0.5rem">
          <IconButton
            onClick={handleClose}
            sx={{
              alignSelf: "flex-end",

              path: {
                fill: "#666666",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Stack gap="0.5rem" alignItems="center">
            <Stack position="relative" alignItems="center">
              <MUIImage
                width={153.03}
                height={93.39}
                src="icons/levelup.svg"
                alt="Level up"
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: -1,
                }}
              />

              <Typography
                fontFamily="var(--font-inter)"
                fontSize="8.75rem"
                lineHeight="6.25rem"
                fontWeight="600"
                component="h2"
                color="blue.main"
              >
                {level}
              </Typography>
            </Stack>

            <Typography
              fontFamily="var(--font-inter)"
              fontSize="1.875rem"
              lineHeight="2.5rem"
              fontWeight="600"
              component="strong"
              color="title.main"
            >
              Parabéns
            </Typography>

            <Typography
              fontFamily="var(--font-inter)"
              fontSize="1.25rem"
              lineHeight="1.875rem"
              fontWeight="400"
              component="p"
              color="#666666"
            >
              Você alcançou um novo level
            </Typography>
          </Stack>
        </Stack>

        {shareEnabled && (
          <Button
            startIcon={<XIcon />}
            sx={{
              backgroundColor: "common.black",
              height: "5rem",
              color: "common.white",
              borderRadius: 0,
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: "grayLine.main",
              fontSize: "1.25rem",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,

              "&:hover": {
                filter: "brightness(0.9)",
              },
            }}
          >
            Compartilhar no X
          </Button>
        )}
      </Stack>
    </Modal>
  )
}
