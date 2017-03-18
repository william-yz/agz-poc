import Card from '../../Card'

export default class ShanTong extends Card {

  static _id = '3016'
  static cardName = '山童'

  constructor (star) {
    super({
      id: '3016',
      type: 'R',
      name: '山童',
      star: star
    })
  }
}
