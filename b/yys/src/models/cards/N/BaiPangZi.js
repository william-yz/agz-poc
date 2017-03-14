import Card from '../Card'

export default class BaiPangZi extends Card {

  static id = '301'
  static cardName = '白胖子'

  constructor (star) {
    super({
      id: '301',
      type: 'N',
      name: '白胖子',
      star: star
    })
  }


}
