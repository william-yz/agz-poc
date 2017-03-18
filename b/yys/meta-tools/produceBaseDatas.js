const fs = require('fs')
const tr = require('transliteration').transliterate

const getTemplate = ({ATK, DEF, HP, SPEED, CTRI}) =>
`export default {
  baseRank: {
    ATK: '${ATK}',
    DEF: '${DEF}',
    HP: '${HP}',
    SPEED: '${SPEED}',
    CTRI: '${CTRI}',
  }
}
`
function produce({id, type, ATK, DEF, HP, SPEED, CTRI}) {
  const code = getTemplate({ATK, DEF, HP, SPEED, CTRI})
  fs.writeFileSync(`./class/${type}/datas/${id}.js`, code)
}

module.exports = produce
