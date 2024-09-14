"use client"

import Paper from "@mui/material/Paper"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import { getLeaderboardData } from "@/app/actions/user"

function calculateTotalXP(status: ExperienceStatus): number {
  let totalXP = 0

  // Loop para calcular o XP necessário para atingir cada nível anterior
  for (let lvl = 1; lvl < status.level; lvl++) {
    const xpForLevel = Math.pow((lvl + 1) * 4, 2)
    totalXP += xpForLevel
  }

  // Adiciona a experiência atual do nível que o usuário está atualmente
  totalXP += status.currentExperience

  return totalXP
}

const columns: GridColDef[] = [
  { field: "position", headerName: "POSIÇÃO", width: 240 },
  { field: "user", headerName: "USUÁRIO", width: 240 },
  { field: "challenges", headerName: "DESAFIOS", width: 240 },
  {
    field: "total_experience",
    headerName: "EXPERIÊNCIA",
    type: "number",
    width: 240,
    valueGetter: (value, row: LeaderboardRow) => row.total_experience,
  },
]

const paginationModel = { page: 0, pageSize: 10 }

export default async function LeaderboardTable({}) {
  const rows = await getLeaderboardData()

  return (
    <Paper sx={{ height: "90%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}
