const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const setupUserRoute = require('./routes/user')
const setupAuthRoute = require('./routes/auth')
const setupRequestRoute = require('./routes/request')

const path = require('path')
const app = express();
const engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.use(express.static('public'))

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/views'));

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.render('index')
});

app.get('/signup', function (req, res) {
  res.render('form.html')
})

app.get('/login', function (req, res) {
  res.render('login.html')
})

app.get('/account/:id', function (req, res) {
  res.render('account')
})

app.get('/heroes', function (req, res) {
  res.render('heroes')
})


setupUserRoute(app)
setupAuthRoute(app)
setupRequestRoute(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


module.exports = app;
