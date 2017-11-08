const express = require('express')
const path = require('path')
const app = express()
const Feed = require('rss-to-json')
const env = require('dotenv').config()
const PORT = process.env.PORT || 3004

app.use(express.static('public'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/index.html'))
})

app.get('/feed', (req, res) => {
  Feed.load('https://medium.com/feed/@mlars84', (err, rss) => {
    console.log(rss)
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
