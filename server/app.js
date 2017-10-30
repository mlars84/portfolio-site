//requires in express
const express = require('express');
//requires a path and normalizes directory abbreviations
const path = require('path');
// call the function express() and puts new Express app into the app const
const app = express();
const Feed = require('rss-to-json');

//require dotenv to hide github oauthToken
const env = require('dotenv').config();

//creates port constiable with both heroku port and local port 3004
const port = process.env.PORT || 3004;

//static public files
app.use(express.static('public'));

//uses express to deliver html files
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.get('/feed', (req, res) => {
  Feed.load('https://medium.com/feed/@mlars84', function(err, rss){
    console.log(rss);
  })
})

//spins up server with port based on line 9
app.listen(port, () => {
  console.log('listening on port: ', port);
});
