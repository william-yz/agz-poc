import Card from '../Card'
const ranks = [{
  ATK: 'A',
  DEF: 'B',
  HP: 'B'
}]
export default class JiuTunTongzi extends Card {
  constructor (star) {
    super({
      type: 'SRR',
      name: '酒吞童子',
      star
    })
  }
}