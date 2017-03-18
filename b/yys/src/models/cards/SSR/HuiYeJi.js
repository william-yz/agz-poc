import Card from '../../Card'

export default class HuiYeJi extends Card {

  static _id = '1012'
  static cardName = '辉夜姬'

  constructor (star) {
    super({
      id: '1012',
      type: 'SSR',
      name: '辉夜姬',
      star: star
    })
  }
}
