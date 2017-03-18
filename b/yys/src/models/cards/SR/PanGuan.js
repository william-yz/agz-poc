import Card from '../../Card'

export default class PanGuan extends Card {

  static _id = '2012'
  static cardName = '判官'

  constructor (star) {
    super({
      id: '2012',
      type: 'SR',
      name: '判官',
      star: star
    })
  }
}
