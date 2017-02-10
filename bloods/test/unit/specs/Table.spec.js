const Table = require('src/model/Table')

describe('Table', function () {
  var table
  beforeEach(function () {
    table = new Table()
  })
  it('init', function () {
    expect(table.players.length).to.eq(4)
    expect(table.current.size()).to.eq(14)
  })
})
