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

/* Routes for User CRUD operations */

/* Route for insert user */
router.route('/addUser').post(function (req, res) {
    backendController.insertUser(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Routes for student CRUD operations */

/* Route for insert student */
router.route('/student/addStudent').post(function (req, res) {
    console.log(req.body);
    backendController.insertStudent(req.body, function (result, error) {

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
            console.log(result);
            res.json(result);
        }
    });
});

/** delete student */
router.route('/student/deleteStudent').post(function (req, res) {
    console.log(req.body);

    backendController.deleteStudent(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            res.status(200);
            res.json(result);
        }

    });
});


/* Router for User Authentications */
router.route('/auth').post(function (req, res) {

    console.log('Auth Request identified..');

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
    if (req.body.studentId) {

        backendController.updateStudent(req.body, function (result, error) {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.json(result);
            }
        });
    } else if (req.body.mentorId) {
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

/* Routes for post CRUD operations */

/* get posts */
router.route('/posts/getPost').post(function (req, res) {
    backendController.getPosts(req.body, function (result, error) {
        console.log(result);

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }

    });
});

/* get reply fro posts */

router.route('/posts/getPostReply').post(function (req, res) {
    console.log("route for replys called");

    backendController.getreplyPosts(req.body, function (result, error) {
        console.log(result);

        if (error) {
            res.status(404);
            res.send(error);
        } else {
            //res.status(200);
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

/* insert a Reply for post */
router.route('/posts/insertReply').post(function (req, res) {
    backendController.insertReply(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
           // res.status(200);
            res.json(result);
        }

    });
});

/* insert post reply */

router.route('/posts/insertPost').post(function (req, res) {
    backendController.insertPost(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            //res.status(200);
            res.json(result);
        }

    });
});

/* Router for file uploading */
router.route('/file/upload').post(upload.single("file"), fileWorker.uploadFile);




/* Routes for project idea CRUD operations */

/* Router for inserting project idea */

router.route('/projectideas/addIdea').post(function (req, res) {
    backendController.insertProjectIdea(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for getting project idea by idea id*/

router.route('/projectideas/get/id').post(function (req, res) {
    backendController.getProjectIdea(req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

/* Router for updating project idea */
router.route('/projectideas/update/projectIdea').post(function (req, res) {
    backendController.updateProjectIdea(req.body, function (result, err) {
        if (err) {
            res.status(404);
            res.send(err);
        } else {
            res.status(200);
            res.send('update completed');
        }
    });
});

/** Router for delete project idea */
router.route('/projectideas/delete/projectIdea').post(function (req, res) {

    backendController.deleteProjectIdea(req.body, function (result, error) {
        if (!result) {
            res.status(404);
            res.send(error);
        } else {
            //res.status(200);
            res.send("ok");
        }

    });
});

/* Routes for task CRUD operations */

module.exports = router;