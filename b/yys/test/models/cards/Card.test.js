import JiuTunTongZi from '../../../src/models/cards/SSR/JiuTunTongZi'

test('Card', () => {
  let card = new JiuTunTongZi(2)
  // console.log(card.baseATK)
  // console.log(card.baseHP)
  // console.log(card.baseDEF)
  // console.log(card.rank)
  expect(card.rank).toEqual({ATK: 'B+', DEF: 'B', HP: 'B'})
})