import Card from '../../Card'

export default class GuNu extends Card {

  static _id = '2007'
  static cardName = '骨女'

  constructor (star) {
    super({
      id: '2007',
      type: 'SR',
      name: '骨女',
      star: star
    })
  }
}
