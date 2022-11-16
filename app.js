const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');

const app = express();
const port = 3000;

var connection = mysql.createConnection({
  host: "178.33.183.155",
  user: "demo",
  password: "demo",
  database: "demo"
});

app.set('view engine', 'ejs');

connection.connect();

app.get('/', (req, res) => {
  connection.query("SELECT product, SUM(quantity) AS quantity, ROUND(AVG(price), 2) AS price FROM orders GROUP BY 1;", (err, data) => {
    res.render('index', {data:data});
  })
})

app.listen(port, () => { })

