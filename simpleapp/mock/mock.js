const order = require('./order.json')
const city = require('./city.json')
const list = require('./list.json')
const detail = require('./detail.json')
const cities = require('./cities.json')
module.exports = () => {
  return {
    order,
    city,
    list,
    detail,
    cities,
  }
}
