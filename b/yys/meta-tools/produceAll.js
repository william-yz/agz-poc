const fs = require('fs')
const os = require('os')
const tr = require('transliteration').transliterate
const _ = require('lodash')

const prepare = require('./prepare')
const produceClass = require('./produceClass')
const produceProfile = require('./produceProfile')
const produceBaseDatas = require('./produceBaseDatas')

const nextId = require('./nextId')

function handleRaw() {
  const raw = fs.readFileSync('./raw.csv')
    .toString()
    .split(os.EOL)
    .map(row => row.split(','))
    .filter(row => row.some(r => !_.isEmpty(r)))
  const keys = raw.shift()
  const datas = raw.map(row => _.zipObject(keys, row))
  datas.forEach(data => {
    data.pingyin =  tr(data.name).replace(/ /g, '')
    data.id = nextId.getId(data.type)
  })
  return datas
}


function produceAll() {
  prepare()
  const datas = handleRaw()
  datas.forEach(produceClass)
  produceProfile(datas)
  datas.forEach(produceBaseDatas)
}
produceAll()
