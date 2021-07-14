const express = require('express')
const router = express.Router()

const home = require('./module/home')
const restaurants = require('./module/restaurants')
const search = require('./module/search')

router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/search', search)

module.exports = router
