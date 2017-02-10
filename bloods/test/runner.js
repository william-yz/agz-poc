const readline = require('readline')
const os = require('os')
const Table = require('../src/model/Table')
const {GETTED_CONSIDERING} = require('../src/model/constants')
const _ = require('lodash')
var table = new Table()

function print (current) {
  _.each(current.transform(), (each, index) => {
    console.log(`${index}:`, each)
  })
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
function read (msg, cb) {
  rl.question(msg + os.EOL, function (input) {
    cb(input)
  })
}

function run (current) {
  print(current)
  if (current.status & GETTED_CONSIDERING) {
    var msg = []
    msg.push('put')
    current.canHu && msg.push('hu')
    current.canGang && msg.push('gang')
  }
  read('put?', function (input) {
    input = input.split(',')
    current.putIndex(input)
    current = current.next
    current.get()
    run(current)
  })
}
run(table.current)

