/**
 * Class representing parsers, consumers of
 * See also : {@link https://github.com/rdfjs/representation-task-force/blob/master/interface-spec.md#sink Sink specification}
 */
class Parsers {
  constructor (parsers) {
    if (parsers) {
      Object.keys(parsers).forEach((mediaType) => {
        this[mediaType] = parsers[mediaType]
      })
    }
  }


/**
   * Look for a mediaType within content
   * HERE
   */
  find (mediaType) {
    if (!(mediaType in this)) {
      return null
    }

    return this[mediaType]
  }

  list () {
    let propertyBlackList = ['find', 'list', 'read']

    return Object.keys(this).filter((property) => {
      return propertyBlackList.indexOf(property) === -1
    })
  }

  import (mediaType, input, options) {
    let parser = this.find(mediaType)

    if (!parser) {
      return null
    }

    return parser.import(input, options)
  }
}

module.exports = Parsers
