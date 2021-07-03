const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results})
})

app.get('/search', (req, res) => {
  const restaurants = restaurantList.results.filter((restaurant) => restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase()))
  res.render('index', { restaurants: restaurants, keyword: req.query.keyword })
})

app.get('/restaurants/:restaurant_id', (req,res) => {
  const restaurant = restaurantList.results.filter((restaurant) => restaurant.id == req.params.restaurant_id)
  console.log(restaurant)
  res.render('show', { restaurant: restaurant[0]})
})

app.listen(port, () => {
  console.log(`This server is running on localhost:${port}`)
})