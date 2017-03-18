import Card from '../../Card'

export default class YaoQinShi extends Card {

  static _id = '2016'
  static cardName = '妖琴师'

  constructor (star) {
    super({
      id: '2016',
      type: 'SR',
      name: '妖琴师',
      star: star
    })
  }
}
