import Link from "next/link"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

import MUIImage from "@/components/mui-image"

import { getLeaderboardData } from "@/app/actions/user"

export default async function LeaderboarTable() {
  const rows = await getLeaderboardData()

  return (
    <TableContainer component={Paper}>
      <Table aria-label="leaderboard-table">
        <TableHead sx={{ background: "#F2F3F5" }}>
          <TableRow>
            <TableCell align="center" sx={{ width: "4.5rem" }}>
              <Typography
                fontFamily="var(--font-inter)"
                fontSize=".875rem"
                fontWeight="700"
                color="#ACACAD"
              >
                POSIÇÃO
              </Typography>
            </TableCell>

            <TableCell align="left" width="60%">
              <Typography
                fontFamily="var(--font-inter)"
                fontSize=".875rem"
                fontWeight="700"
                color="#ACACAD"
              >
                USUÁRIO
              </Typography>
            </TableCell>

            <TableCell align="left">
              <Typography
                fontFamily="var(--font-inter)"
                fontSize=".875rem"
                fontWeight="700"
                color="#ACACAD"
              >
                DESAFIOS
              </Typography>
            </TableCell>

            <TableCell align="left">
              <Typography
                fontFamily="var(--font-inter)"
                fontSize=".875rem"
                fontWeight="700"
                color="#ACACAD"
              >
                EXPERIÊNCIA
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ overflow: "scroll" }}>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell align="center" component="th" scope="row">
                <Typography
                  fontFamily="var(--font-inter)"
                  fontSize="1.5rem"
                  fontWeight="500"
                  color="#666666"
                >
                  {row.position}
                </Typography>
              </TableCell>

              <TableCell align="left">
                <Stack
                  component={Link}
                  href={`/share/${row.user.slug}`}
                  direction="row"
                  alignItems="center"
                  gap="1rem"
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  <MUIImage
                    width={64}
                    height={64}
                    src={row.user.avatar_url!}
                    alt={row.user.name}
                    sx={{
                      borderRadius: "9999px",
                    }}
                  />

                  <Stack gap="0.25rem">
                    <Typography
                      fontFamily="var(--font-inter)"
                      fontSize="1.25rem"
                      fontWeight="600"
                      color="title.main"
                    >
                      {row.user.name} {row.user.me && "(você) 🏆"}
                    </Typography>

                    <Stack direction="row" alignItems="center" gap="0rem">
                      <MUIImage
                        src="icons/level.svg"
                        alt="Level"
                        width={14}
                        height={16}
                        sx={{ marginRight: "0.5rem" }}
                      />

                      <Typography
                        fontFamily="var(--font-inter)"
                        fontSize="1rem"
                        fontWeight="400"
                        color="#666666"
                      >
                        Level {row.user.level}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </TableCell>

              <TableCell align="left">
                <Typography
                  component="span"
                  fontFamily="var(--font-inter)"
                  fontSize="1rem"
                  fontWeight="500"
                  color="blue.main"
                >
                  {row.challenges}{" "}
                </Typography>

                <Typography
                  component="span"
                  fontFamily="var(--font-inter)"
                  fontSize="1rem"
                  fontWeight="500"
                  color="#666666"
                >
                  {row.challenges === 1 ? "completado" : "completados"}
                </Typography>
              </TableCell>

              <TableCell align="left">
                <Typography
                  component="span"
                  fontFamily="var(--font-inter)"
                  fontSize="1rem"
                  fontWeight="500"
                  color="blue.main"
                >
                  {row.total_experience}{" "}
                </Typography>

                <Typography
                  component="span"
                  fontFamily="var(--font-inter)"
                  fontSize="1rem"
                  fontWeight="500"
                  color="#666666"
                >
                  xp
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
