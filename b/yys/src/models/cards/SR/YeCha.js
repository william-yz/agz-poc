import Card from '../../Card'

export default class YeCha extends Card {

  static _id = '2028'
  static cardName = '夜叉'

  constructor (star) {
    super({
      id: '2028',
      type: 'SR',
      name: '夜叉',
      star: star
    })
  }
}
