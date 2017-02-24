const pow = Math.pow
const floor = Math.floor

const ATK = {
  SSS: 220,
  SS: 210,
  S: 200,
  AP: 195,
  A: 190,
  AM: 185,
  B: 180, 
  C: 170
}

const HP = {
  SSS: 1100,
  SS: 1050,
  S: 1000,
  A: 950,
  B: 900,
  C: 850
}

const DEF = {
  SSS: 90,
  SS: 85,
  S: 80,
  A: 75,
  B: 70,
  C: 65
}

const ATK_RATE = 0.05
const HP_RATE = 0.05
const DEF_RATE = 0.05

export function getATK(rank, level) {
  return floor(ATK[rank] * pow(1 + ATK_RATE, level - 1))
}
export function getDEF(rank, level) {
  return floor(DEF[rank] * pow(1 + DEF_RATE, level - 1))
}
export function getHP(rank, level) {
  return floor(HP[rank] * pow(1 + HP_RATE, level - 1))
}