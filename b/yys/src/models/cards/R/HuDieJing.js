import Card from '../../Card'

export default class HuDieJing extends Card {

  static _id = '3015'
  static cardName = '蝴蝶精'

  constructor (star) {
    super({
      id: '3015',
      type: 'R',
      name: '蝴蝶精',
      star: star
    })
  }
}
