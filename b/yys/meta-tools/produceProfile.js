const fs = require('fs')
const os = require('os')
const genImport = cardList => {
  return cardList.map(card => {
    return `import ${card.pingyin} from './${card.type}/${card.pingyin}'${os.EOL}`
  }).join('')
}

const genKeyValue = cardList => {
  return cardList.map(card => {
    return `  [${card.pingyin}._id]: ${card.pingyin},${os.EOL}`
  }).join('')
}

const genMap = cardList => {
  const map = {
    SSR: [],
    SR: [],
    R: [],
    N: []
  }
  cardList.forEach(card => {
    map[card.type].push(card.id)
  })
  return `
export const map = {
  SSR: ['${map.SSR.join('\', \'')}'],
  SR: ['${map.SR.join('\', \'')}'],
  R: ['${map.R.join('\', \'')}'],
  N: ['${map.N.join('\', \'')}'],
}
`
}

const getTemplate = (cardList) =>
`${genImport(cardList)}
export default {
${genKeyValue(cardList)}
}
${genMap(cardList)}`

function produce(cardList) {
  const code = getTemplate(cardList)
  fs.writeFileSync(`./class/index.js`, code)
}

module.exports = produce
