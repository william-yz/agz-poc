const utils = require('../../src/utils')
const expect = require('chai').expect
describe('utils test', function () {
  it('range', function () {
    var i = 0,
      max
    utils.range(99, function (index) {
      i++;
      max = index
    })
    expect(i).to.be.equal(99)
    expect(max).to.be.equal(98)

    i = 0
    utils.range(99, function (index) {
      i++;
      max = index
      if (index === 10) 
        return false
    })
    expect(i).to.be.equal(11)
    expect(max).to.be.equal(10)
  })

  it('nextInt', function () {
    utils.range(99, function () {
      var a = utils.nextInt(10)
      expect(a).to.gte(0)
      expect(a).to.lte(9)
    })
  })
})