// const mahjong = require('../../src/model/mahjong')
// const utils = require('../../src/utils')
// const expect = require('chai').expect
// describe('mahjong test', function () {
//   var mahjongs
//   beforeEach(function () {
//     mahjongs = mahjong.init()
//   })
//   it('init', function () {
//     expect(mahjongs.length).to.be.eq(108)
//   })

//   it('next', function () {
//     var all = []
//     utils.range(3, function (i) {
//       all[i] = []
//       utils.range(9, function (j) {
//         all[i][j] = 0
//       })
//     })
//     utils.range(108, function () {
//       var {newMahjongs, next} = mahjong.next(mahjongs),
//         {color, value} = next,
//         mahjongs = newMahjongs
//       expect(color).to.be.gte(0)
//       expect(color).to.be.lte(2)
//       expect(value).to.be.gte(0)
//       expect(value).to.be.lte(9)
//       all[color][value]++
//     })
//     utils.range(3, function (i) {
//       utils.range(9, function (j) {
//         expect(all[i][j]).to.be.eq(4)
//       })
//     })
//     expect(newMahjongs.length).to.be.eq(0)
//   })
// })