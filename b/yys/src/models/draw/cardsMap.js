import { oneOf } from '../../utils/random'
import cards, { map } from '../cards'

export const chooseCard = (type) => {
  const no = oneOf(map[type])
  return cards[no]
}
