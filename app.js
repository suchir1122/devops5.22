const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('{ "response": "Hello From DSCE" }'));
app.get('/will', (req, res) => res.send('{ "response": "Hello World" }'));
app.get('/ready', (req, res) => res.send('{ "response": "Great!, It works!" }'));

module.exports = app;
