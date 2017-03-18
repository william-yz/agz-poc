import Card from '../../Card'

export default class GuLongHuo extends Card {

  static _id = '3030'
  static cardName = '古笼火'

  constructor (star) {
    super({
      id: '3030',
      type: 'R',
      name: '古笼火',
      star: star
    })
  }
}
