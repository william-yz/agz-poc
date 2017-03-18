const pow = Math.pow
const floor = Math.floor

export const RANKS_MAP = ['C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+', 'S', 'SS', 'SSS']

const ATK = {
  'SSS' : 400,
  'SS'  : 366,
  'S'   : 333,
  'A+'  : 300,
  'A'   : 275,
  'A-'  : 250,
  'B+'  : 225,
  'B'   : 200,
  'B-'  : 175,
  'C+'  : 150,
  'C'   : 125,
  'C-'  : 100
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

const SPEED = {

}

const CTRI = {

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
export function getSPEED(rank, level) {
  return SPEED[rank]
}
export function getCTRI(rank, level) {
  return CTRI[rank]
}
