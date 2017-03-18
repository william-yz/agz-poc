import Card from '../../Card'

export default class TangZhiSanYao extends Card {

  static _id = '4010'
  static cardName = '唐纸伞妖'

  constructor (star) {
    super({
      id: '4010',
      type: 'N',
      name: '唐纸伞妖',
      star: star
    })
  }
}
