const express = require('express')
const router = express.Router()

const home = require('./module/home')
const restaurants = require('./module/restaurants')
const search = require('./module/search')
const users = require('./module/users')
const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, restaurants)
router.use('/search', authenticator, search)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router
