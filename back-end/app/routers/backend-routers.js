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


/* Router for getting companies details */
router.route('/company/getall').post(function (req, res) {
    backendController.getCompanies(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting mentors details */
router.route('/mentor/getall').post(function (req, res) {
    backendController.getMentors(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting students details */
router.route('/student/getall').post(function (req, res) {
    backendController.getStudents(function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});


/* Routes for post CRUD operations */

/* get posts */
<<<<<<< HEAD
router.route('/posts/getPost').get(function (req, res) {
    console.log(req.body);
    backendController.getPosts(req.body,function(res,error){
        if(res){
            if(error){
                res.status(404);
                res.send(error);
            }else{
                res.status(200);
                res.json(result);
            }
=======
router.route('/posts/getPost').post(function (req, res) {
    backendController.getPosts(req.body, function (res, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
>>>>>>> 554351f1c3a0f58ec8507536e9d171f9995cf15b
        }

    });
});

/* get reply fro posts */

<<<<<<< HEAD
router.route('/posts/getPostReply').get(function (req, res) {
    backendController.getreplyPosts(req.body,function(res,error){
        if(error){
=======
router.route('/posts/getPostReply').post(function (req, res) {
    backendController.getreplyPosts(req.body, function (res, error) {
        if (error) {
>>>>>>> 554351f1c3a0f58ec8507536e9d171f9995cf15b
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});


/* update posts  --changes are needed*/
router.route('/posts/updatePost').post(function (req, res) {
    backendController.updatePost(req.body, func(req.body, function (result, err) {
        if (err) {
            res.status(404);
            res.send(err);
        } else {
            req.status(200);
            res.send('update completed');
        }
    })
    )
});


/* Delete Posts */
router.route('/posts/deletePost').post(function (req, res) {
    backendController.deletePosts(req.body, function (res, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.send("ok");
        }

    });
});

/* insert a Reply  */
router.route('/posts/insertReply').post(function (req, res) {
    backendController.insertReply(req.body, function (res, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/* insert post post */

router.route('/posts/insertPost').post(function (req, res) {
    backendController.insertPost(req.body, function (res, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});

/* Router for file uploading */
router.route('/file/upload').post(upload.single("file"), fileWorker.uploadFile);


module.exports = router;