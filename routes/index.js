const express = require('express')
const router = express.Router()

const home = require('./module/home')
const restaurants = require('./module/restaurants')
const search = require('./module/search')
const users = require('./module/users')

router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/search', search)
router.use('/users', users)

module.exports = router
