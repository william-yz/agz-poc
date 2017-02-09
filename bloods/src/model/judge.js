const _ = require('lodash')

var a = 12
function checkHavePair (pp) {
  var ps = []
  var hasPair = false
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      var c = pp[i][j]
      if (c >= 2) {
        hasPair = true
        var p = _.cloneDeep(pp)
        p[i][j] -= 2
        ps.push(p)
      }
    }
  }
  return {ps, hasPair}
}

function p1 (p) {
  if (a === 0) return true
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      var c1 = p[i][j]
      if (c1 > 0) {
        if (c1 >= 3) {
          p[i][j] -= 3
          a -= 3
          var c = p1(p)
          if (c) {
            return c
          }
        }
        if (j < 7) {
          var c2 = p[i][j + 1]
          var c3 = p[i][j + 2]
          if (c2 > 0 && c3 > 0) {
            p[i][j] --
            p[i][j + 1] --
            p[i][j + 2] --
            a -= 3
            return p1(p)
          } else {
            return false
          }
        }
      }
    }
  }
}

function judgeHu (pp) {
  var {ps, hasPair} = checkHavePair(pp)
  if (hasPair) {
    for (let i = 0; i < ps.length; i++) {
      a = 12
      var p = ps[i]
      if (p1(p)) {
        return true
      }
    }
    return false
  } else {
    return false
  }
}

export function judge (pp) {
  var ting = []
  var p = _.cloneDeep(pp)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      p[i][j] ++
      if (judgeHu(p)) {
        ting.push({
          color: i,
          value: j
        })
      }
      p[i][j] --
    }
  }
  return ting
}
