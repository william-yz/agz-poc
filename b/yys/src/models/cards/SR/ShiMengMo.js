import Card from '../../Card'

export default class ShiMengMo extends Card {

  static _id = '2022'
  static cardName = '食梦貘'

  constructor (star) {
    super({
      id: '2022',
      type: 'SR',
      name: '食梦貘',
      star: star
    })
  }
}
