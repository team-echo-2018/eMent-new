/**
 * Server Application for eMent Platform
 * Server will run on port 8000 as a seperate application
 */


/* Call for Packages that we will need for our application */
var express = require('express'); // calling the express package
var app = express(); // define express application
var bodyParser = require('body-parser');  // calling the body-parser package



// const cors = require('cors')
// const corsOptions = {
//   origin: 'http://localhost:4200',
//   optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions));



/* Set the global basedir variable */
global.__basedir = __dirname;

/* Setting the 'app' variable to use 'bodyParser' */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Serve static files in  the uploads folder */
app.use(express.static('uploads'));

/* Setting the port where our application will run */
var port = process.env.PORT || 8000;

/* Starting the Server (Application) */
//==============================================================
app.listen(port);
console.log('Application listen on port ' + port);


/* Routes of our API */
//==============================================================

/* Add headers */
app.use(function (req, res, next) {

    // Website that wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods that wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers that wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

/* Define the instance of the Express routes */
var router = express.Router();

/* Middleware to use on all requests sent to our API - Standard Message */
router.use(function (req, res, next) {
    console.log('Request identified..');
    next();
});

/* All our routes will be prefixed with '/api' */
app.use('/api', router);
app.use('/api', require('./app/routers/backend-routers'));
