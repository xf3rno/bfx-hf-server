'use strict'

const send = require('../send')

module.exports = (ws, msg) => {
  send(ws, ['notify', 'success', msg])
}
