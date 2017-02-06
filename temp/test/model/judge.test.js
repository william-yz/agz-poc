const _ = require('lodash')
const expect = require('chai').expect

describe('judge test', function () {
  it('is hu', function () {
    var p = [[3,1,1,1,1,1,1,1,3],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]

    expect(judge(p)).to.be.eq(true)
  })
})

var p = [[3,1,1,1,1,1,1,1,3],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
function checkHavePair (pp) {
  var p = _.cloneDeep(pp)
  var hasPair = false
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      var c = p[i][j]
      if (!hasPair) {
        if (c >= 2) {
          hasPair = true
        }
        c -= 2
      }
    }
  }
  return {p, hasPair}
}

function p1 (p) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      var c1 = p[i][j]
      if (c1 > 0) {
        var c2 = p[i][j + 1],
        c3 = p[i][j + 1]
        if (c2 > 0 && c3 > 0) {
          c1 --
          c2 --
          c3 --
          return p1(p)
        } else {
          return false
        }
      }
    }
  }
}

function judge (pp, needCheck) {
  var {p, hasPair} = checkHavePair(pp)
  if (hasPair) {
    return p1(p)
  } else {
    return false
  }
}