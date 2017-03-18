import Card from '../../Card'

export default class HuaNiaoJuan extends Card {

  static _id = '1011'
  static cardName = '花鸟卷'

  constructor (star) {
    super({
      id: '1011',
      type: 'SSR',
      name: '花鸟卷',
      star: star
    })
  }
}
