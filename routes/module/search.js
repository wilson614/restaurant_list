const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const { keyword, sortItem, sortMethod } = req.query
  const sort = {}
  sort[sortItem] = sortMethod

  if (!!sortItem) {
    Restaurant.find()
      .lean()
      .sort(sort)
      .then(restaurantList => {
        const restaurants = restaurantList.filter((restaurant) => restaurant.name.toLowerCase().includes(keyword.toLowerCase().trim()))
        res.render('index', { restaurants, keyword, sortItem, sortMethod })
      })
      .catch(error => console.log(error))
  } else {
  Restaurant.find()
    .lean()
    .then(restaurantList => {
      const restaurants = restaurantList.filter((restaurant) => restaurant.name.toLowerCase().includes(keyword.toLowerCase().trim()))
      res.render('index', { restaurants, keyword })
    })
    .catch(error => console.log(error))
  }
})

module.exports = router