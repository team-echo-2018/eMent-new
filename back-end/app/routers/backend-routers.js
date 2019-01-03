/**
 * Definitions for routings in the system.
 * Server will call to here and this will call to controllers.
 **/


/* ---------  REQUIRES  -----------*/

var express = require('express');
var BackendController = require('../controllers/backend-controller');
var upload = require('../config/multer.config');
var fileWorker = require('../controllers/file.controller');


/* ---------  DEFINE VARIABLES  -----------*/

var router = express.Router();
var backendController = new BackendController();


/* ---------  ROUTERS - POST METHODS   -----------*/

// not used yet...
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

/* Router for User Authentications */
router.route('/auth').post(function (req, res) {

    console.log('Auth Request identified..');
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

/* Router for getting user profile details */
router.route('/profile').post(function (req, res) {
    if (req.body.userType == "S") {
        backendController.getStudent(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    } else if (req.body.userType == "M") {
        backendController.getMentor(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    }
});

/* Router for update user profile */
router.route('/profile/update').post(function (req, res) {
    if (req.body.userType == "S") {
        backendController.updateStudent(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    } else if (req.body.userType == "M") {
        backendController.updateMentor(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    }
});


/* Routes for post CRUD operations */

/* get posts */
router.route('/posts/getPost').post(function (req, res) {
    backendController.getPosts(req.body,function(res,error){
        if(error){
            res.status(404);
            res.send(error);
        }else{
            res.status(200);
            res.json(result);
        }

    });
});

/* update posts  --changes are needed*/
router.route('/posts/updatePost').post(function (req, res) {
    backendController.updatePost(req.body,func(req.body,function(result,err){
            if(err){
                res.status(404);
                res.send(err);
            }else{
                req.status(200);
                res.send('update completed');
            }
        })
        )});


/* Delete Posts */
router.route('/posts/deletePost').post(function (req, res) {
    backendController.deletePosts(req.body,function(res,error){
        if(error){
            res.status(404);
            res.send(error);
        }else{
            res.status(200);
            res.send("ok");
        }

    });
});

/* insert a Post */
router.route('/posts/insertPost').post(function (req, res) {
    backendController.insertPost(req.body,function(res,error){
        if(error){
            res.status(404);
            res.send(error);
        }else{
            res.status(200);
            res.json(result);
        }

    });
});

/* Router for file uploading */
router.route('/file/upload').post(upload.single("file"), fileWorker.uploadFile);


module.exports = router;