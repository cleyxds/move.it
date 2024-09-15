import Link from "next/link"
import { notFound } from "next/navigation"

import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import MUIImage from "@/components/mui-image"

import { getUserByLogin, formatLeaderboardData } from "@/app/actions/user"

import ColoredLogo from "@/assets/colored-logo"

export default async function SharePage({
  params,
}: {
  params: {
    username: string
  }
}) {
  const { username: login } = params

  const user = await getUserByLogin(login)
  if (!user) return notFound()

  const totalExperience = await formatLeaderboardData([user], user.email).then(
    (data) => data[0].total_experience
  )

  return (
    <Container>
      <Stack direction="row" flex={1} gap="5rem">
        <Stack justifyContent="center" alignItems="center" flex={1}>
          <Stack gap="3rem" alignItems="center">
            <Stack position="relative" alignItems="center">
              <MUIImage
                width={384}
                height={240}
                src="/icons/levelup.svg"
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
                fontSize="19.1288rem"
                lineHeight="16.3938rem"
                fontWeight="700"
                component="h2"
                color="blue.main"
                sx={{
                  textShadow: "0px 14px 14px rgb(89, 101, 224, 0.3)",
                }}
              >
                {user?.level}
              </Typography>
            </Stack>

            <Typography
              fontFamily="var(--font-inter)"
              fontSize="3.5rem"
              lineHeight="4.125rem"
              fontWeight="600"
              component="h3"
              color="title.main"
              textAlign="center"
            >
              Avancei para o próximo level
            </Typography>
          </Stack>
        </Stack>

        <Stack justifyContent="center" paddingLeft="5rem" flex={1} gap="2rem">
          <Stack
            borderBottom="1px solid #DCDDE0"
            paddingBottom="1.5rem"
            alignSelf="flex-start"
          >
            <Typography
              fontFamily="var(--font-inter)"
              fontSize="1.5rem"
              fontWeight="700"
              color="#ACACAD"
            >
              DESAFIOS
            </Typography>

            <Typography
              fontFamily="var(--font-inter)"
              fontSize="1.5rem"
              fontWeight="700"
              color="#666666"
            >
              <Typography
                component="span"
                fontFamily="var(--font-inter)"
                fontSize="1.5rem"
                fontWeight="700"
                color="blue.main"
              >
                {user?.challengesCompleted}{" "}
              </Typography>

              {user?.challengesCompleted === 1 ? "completado" : "completados"}
            </Typography>
          </Stack>

          <Stack
            borderBottom="1px solid #DCDDE0"
            paddingBottom="1.5rem"
            alignSelf="flex-start"
          >
            <Typography
              fontFamily="var(--font-inter)"
              fontSize="1.5rem"
              fontWeight="700"
              color="#ACACAD"
            >
              EXPERIÊNCIA
            </Typography>

            <Typography
              fontFamily="var(--font-inter)"
              fontSize="1.5rem"
              fontWeight="700"
              color="#666666"
            >
              <Typography
                component="span"
                fontFamily="var(--font-inter)"
                fontSize="1.5rem"
                fontWeight="700"
                color="blue.main"
              >
                {totalExperience}{" "}
              </Typography>
              xp
            </Typography>
          </Stack>

          <Stack paddingTop="2rem" component={Link} href="/">
            <ColoredLogo />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
