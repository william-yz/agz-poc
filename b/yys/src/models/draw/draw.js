import { nextInt } from '../../utils/random'

export const normal = () => {
  const n = nextInt(10000)
  if (n < 8000) {
    return 'n'
  } else if (n < 9900) {
    return 'r'
  } else if (n < 9990) {
    return 'sr'
  } else {
    return 'ssr'
  }
}

export const middle = () => {
  const n = nextInt(10000)
  if (n < 7500) {
    return 'r'
  } else if (n < 9900) {
    return 'sr'
  } else {
    return 'ssr'
  }
}

export const advanced = () => {
  const n = nextInt(10000)
  if (n < 7000) {
    return 'r'
  } else if (n < 9800) {
    return 'sr'
  } else {
    return 'ssr'
  }
}