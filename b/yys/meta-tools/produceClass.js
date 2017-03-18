const fs = require('fs')
const tr = require('transliteration').transliterate

const getTemplate = ({id, name, type, pingyin}) =>
`import Card from '../../Card'

export default class ${pingyin} extends Card {

  static _id = '${id}'
  static cardName = '${name}'

  constructor (star) {
    super({
      id: '${id}',
      type: '${type}',
      name: '${name}',
      star: star
    })
  }
}
`
function produce({id, name, type, pingyin}) {
  const code = getTemplate({id, name, type, pingyin})
  fs.writeFileSync(`./class/${type}/${pingyin}.js`, code)
}

module.exports = produce
