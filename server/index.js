const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on ${port}`);
});
