import Mahjong from 'src/model/Mahjong'
import {range} from 'src/utils'
describe('Mahjong', function () {
  var mahjong
  beforeEach(function () {
    mahjong = new Mahjong()
  })

  it('init', function () {
    expect(mahjong.mahjongs.length).to.be.eq(108)
  })

  it('next', function () {
    var all = []
    range(3, function (i) {
      all[i] = []
      range(9, function (j) {
        all[i][j] = 0
      })
    })
    range(108, function () {
      var {color, value} = mahjong.next()
      expect(color).to.be.gte(0)
      expect(color).to.be.lte(2)
      expect(value).to.be.gte(0)
      expect(value).to.be.lte(9)
      all[color][value]++
    })
    range(3, function (i) {
      range(9, function (j) {
        expect(all[i][j]).to.be.eq(4)
      })
    })
    expect(mahjong.size()).to.be.eq(0)
  })
})
