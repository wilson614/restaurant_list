const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  Restaurant.create({
    id: 2,
    name: "梅子鰻蒲燒專賣店",
    name_en: "Umeko Japanese Unagi House",
    category: "日本料理",
    image: "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg",
    location: "台北市中山區林森北路 107 巷 8 號",
    phone: " 02 2521 2813",
    google_map: "https://goo.gl/maps/cUJEmFSRKyH2",
    rating: 4.3,
    description: "鰻魚、鰻魚飯、真空鰻魚"
  })
})