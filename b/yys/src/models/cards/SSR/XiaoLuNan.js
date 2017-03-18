import Card from '../../Card'

export default class XiaoLuNan extends Card {

  static _id = '1004'
  static cardName = '小鹿男'

  constructor (star) {
    super({
      id: '1004',
      type: 'SSR',
      name: '小鹿男',
      star: star
    })
  }
}
