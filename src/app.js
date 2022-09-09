// Express App Setup 
const express = require('express');
const http = require('http'); 
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({ text: 'welcome to pizza shop, for menu visit /test and for booking visit /test/kirus' });
  
});

// Express route handlers
app.get('/test', (req, res) => {
  res.status(200).send({ text: 'see our menu' });
});

// Express route handlers
app.get('/test/kirus', (req, res) => {
  res.status(200).send({ text: 'book our halls' });
  
});
console.log("hello");
module.exports = app;
