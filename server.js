const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


// var cors = require('cors')

// Get our API routes

const app = express();
// app.use(cors());

var indexRouter = require('./server/routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'public')));

// Set our api routes

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', indexRouter);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8081';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
