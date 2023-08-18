require('dotenv').config()
const fetch = require('node-fetch')

exports.handler = async event => {
  console.log(JSON.parse(event.body).payload)
}
