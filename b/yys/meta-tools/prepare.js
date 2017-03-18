const fs = require('fs')

function prepare() {
  try {
    fs.mkdirSync('./class')
    fs.mkdirSync('./class/N')
    fs.mkdirSync('./class/N/datas')
    fs.mkdirSync('./class/R')
    fs.mkdirSync('./class/R/datas')
    fs.mkdirSync('./class/SR')
    fs.mkdirSync('./class/SR/datas')
    fs.mkdirSync('./class/SSR')
    fs.mkdirSync('./class/SSR/datas')
  } catch (e) {}
}

module.exports = prepare
