import Card from '../../../src/models/cards/Card'

test('Card', () => {
  let card = new Card({
    type: 'S',
    name: 'CT',
    rank: {
      ATK: 'S',
      DEF: 'S',
      HP: 'S'
    }
  })
  console.log(card.baseATK)
  console.log(card.baseHP)
  console.log(card.baseDEF)
})