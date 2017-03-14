import { nextInt } from '../../utils/random'
import { compose } from '../../utils'
import { chooseCard } from './cardsMap'

const normal = () => {
  const n = nextInt(10000)
  if (n < 8000) {
    return 'N'
  } else if (n < 9900) {
    return 'R'
  } else if (n < 9990) {
    return 'SR'
  } else {
    return 'SSR'
  }
}

const middle = () => {
  const n = nextInt(10000)
  if (n < 7500) {
    return 'R'
  } else if (n < 9900) {
    return 'SR'
  } else {
    return 'SSR'
  }
}

const advanced = () => {
  const n = nextInt(10000)
  if (n < 7000) {
    return 'R'
  } else if (n < 9800) {
    return 'SR'
  } else {
    return 'SSR'
  }
}

export default {
  normal: compose(normal, chooseCard),
  middle: compose(middle, chooseCard),
  advanced: compose(advanced, chooseCard)
}
