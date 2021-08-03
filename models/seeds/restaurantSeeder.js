/* eslint-disable camelcase */
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('./restaurant.json').results
const User = require('../user')

const defaultUsers = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678',
    restaurants: restaurantList.slice(0, 4)
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678',
    restaurants: restaurantList.slice(4, 8)
  }
]

db.once('open', () => {
  Promise.all(Array.from(defaultUsers, (defaultUser) => {
    const { name, email, password, restaurants } = defaultUser
    return bcrypt.genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => User.create({ name, email, password: hash }))
      .then(user => {
        return Promise.all(Array.from(restaurants, (restaurant) => {
          const { name, name_en, category, image, location, phone, google_map, rating, description } = restaurant
          const userId = user._id
          return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
        }))
      })
  }))
    .then(() => {
      console.log('done.')
      process.exit()
    })
})
