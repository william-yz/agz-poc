import Card from '../../Card'

export default class XiXieJi extends Card {

  static _id = '2014'
  static cardName = '吸血姬'

  constructor (star) {
    super({
      id: '2014',
      type: 'SR',
      name: '吸血姬',
      star: star
    })
  }
}
