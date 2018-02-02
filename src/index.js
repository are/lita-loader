const lita = require('lita')

module.exports = function (source) {
  this.cacheable && this.cacheable()
  return lita(source)
}
