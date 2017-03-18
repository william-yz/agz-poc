import Card from '../../Card'

export default class FengHuangHuo extends Card {

  static _id = '2013'
  static cardName = '凤凰火'

  constructor (star) {
    super({
      id: '2013',
      type: 'SR',
      name: '凤凰火',
      star: star
    })
  }
}
