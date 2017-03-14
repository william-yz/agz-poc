import { oneOf } from '../../utils/random'
import cards from '../cards/cards'
const map = {
  SSR: ['001'],
  SR: ['101'],
  R: ['201'],
  N: ['301']
}

export const chooseCard = (type) => {
  const no = oneOf(map[type])
  return cards[no]
}
