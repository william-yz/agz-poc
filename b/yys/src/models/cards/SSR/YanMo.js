import Card from '../../Card'

export default class YanMo extends Card {

  static _id = '1007'
  static cardName = '阎魔'

  constructor (star) {
    super({
      id: '1007',
      type: 'SSR',
      name: '阎魔',
      star: star
    })
  }
}
