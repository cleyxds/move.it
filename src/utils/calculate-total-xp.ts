export default function calculateTotalXP(
  level: number,
  currentExperience: number
): number {
  let totalXP = 0

  for (let lvl = 1; lvl < level; lvl++) {
    const xpForLevel = Math.pow((lvl + 1) * 4, 2)
    totalXP += xpForLevel
  }

  totalXP += currentExperience

  return totalXP
}
