/* ---------  REQUIRES   -----------*/

var express = require('express');
var Usuario = require('../entities/user');
var Student = require('../entities/student');
var BackendController = require('../controllers/backend-controller');

const util = require('util');

var router = express.Router();
var backendController = new BackendController();


/* ---------  ROUTERS - POST METHODS   -----------*/

router.route('/addUser').post(function (req, res) {
    backendController.insert(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});


/* ---------  ROUTERS - GET METHODS   -----------*/

router.route('/auth').post(function (req, res) {
    // console.log('Auth Request identified..');
    // console.log(JSON.stringify(req.body))

    backendController.auth(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }

    });
});

router.route('/profile').post(function (req, res) {
    backendController.getStudent(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;