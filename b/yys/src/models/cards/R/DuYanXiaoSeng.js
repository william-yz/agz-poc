import Card from '../../Card'

export default class DuYanXiaoSeng extends Card {

  static _id = '3020'
  static cardName = '独眼小僧'

  constructor (star) {
    super({
      id: '3020',
      type: 'R',
      name: '独眼小僧',
      star: star
    })
  }
}
