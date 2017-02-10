const Mahjong = require('src/model/Mahjong')
const {range} = require('src/utils')

describe('Mahjong', function () {
  var mahjong
  beforeEach(function () {
    mahjong = new Mahjong()
  })

  it('init', function () {
    expect(mahjong.mahjongs.length).to.eq(108)
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
      expect(color).to.gte(0)
      expect(color).to.lte(2)
      expect(value).to.gte(0)
      expect(value).to.lte(9)
      all[color][value]++
    })
    range(3, function (i) {
      range(9, function (j) {
        expect(all[i][j]).to.eq(4)
      })
    })
    expect(mahjong.size()).to.eq(0)
  })
})
