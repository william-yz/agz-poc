import Card from '../../Card'

export default class BaiLang extends Card {

  static _id = '2019'
  static cardName = '白狼'

  constructor (star) {
    super({
      id: '2019',
      type: 'SR',
      name: '白狼',
      star: star
    })
  }
}
