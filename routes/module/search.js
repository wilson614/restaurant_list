const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .then(restaurantList => {
      const restaurants = restaurantList.filter((restaurant) => restaurant.name.toLowerCase().includes(keyword.toLowerCase().trim()))
      res.render('index', { restaurants, keyword })
    })
    .catch(error => console.log(error))
})

module.exports = router