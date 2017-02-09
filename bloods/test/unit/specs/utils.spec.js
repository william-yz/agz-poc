import {range, nextInt, oneOf} from 'src/utils'
describe('utils', function () {
  it('range', function () {
    var count = 0
    range(10, i => {
      count++
    })
    expect(count).to.be.eq(10)
    count = 0
    var list = ['a', 'b', 'c']
    range(list, (v, i) => {
      expect(list[i]).to.be.eq(v)
      count++
    })
    expect(count).to.be.eq(3)

    expect(range(list, 'a')).to.be.undefined

    count = 0
    range(10, i => {
      count++
      if (i === 5) {
        return false
      }
    })
    expect(count).to.be.eq(6)

    count = 0
    range(list, (v, i) => {
      expect(list[i]).to.be.eq(v)
      count++
      if (i === 1) {
        return false
      }
    })
    expect(count).to.be.eq(2)
  })

  it('nextInt', function () {
    range(10, i => {
      expect(nextInt(i + 1)).to.be.gte(0)
      expect(nextInt(i + 1)).to.be.lt(i + 1)
    })
  })

  it('oneOf', function () {
    var list = ['a', 'b', 'c']
    expect(oneOf(list)).to.be.oneOf(list)
  })
})
