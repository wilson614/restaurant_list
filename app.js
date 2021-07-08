const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const restaurantList = require('./restaurant.json')

const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter((restaurant) => restaurant.name.toLowerCase().includes(keyword.toLowerCase().trim()))
  if (restaurants.length === 0) {
    return res.render('search', { keyword })
  }
  res.render('index', { restaurants, keyword })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))  
})

app.listen(port, () => {
  console.log(`This server is running on localhost:${port}`)
})