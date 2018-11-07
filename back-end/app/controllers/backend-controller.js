/* ---------  REQUIRES   -----------*/

var User = require('../entities/user');
var Student = require('../entities/student');
var DAOMySql = require('../models/backend-mysql-database');


/* ---------  CONTROLLERS - METHODS   -----------*/

function BackendController() { }

// not used yet... don't change..
BackendController.prototype.insert = function (req, callback) {

    var user = new User(req.nome, 
                        req.user_name,
                        req.senha,
                        req.dataNascimento,
                        addressUser);
    
    var daoMsql = new DAOMySql();

    daoMsql.insert(user, function(result, err) { 
        if (err) {
            callback (null, err);
        } else {
            callback(result)
        }
    })
}


// user authentcation function
BackendController.prototype.auth = function(req, callback){
    
    var daoMsql = new DAOMySql();

    daoMsql.getUser(req.userName,  function(result, err) { 
        console.log("Enter to the get user function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("** no errors");
            if ( result.userPassword == req.userPassword ) {
                console.log("**** password matched");
                callback(result);
            } else {
                console.log("**** password mismatched");
                callback(null, err);
            }
        }
    });
}

// BackendController.prototype.insertStudent = function (req, callback) {

//     var student = new Student(
//         req.std_id, 
//         req.std_fname, 
//         req.std_lname, 
//         req.std_address, 
//         req.std_phone, 
//         req.std_email, 
//         req.std_image, 
//         req.std_description);
    
//     var daoMsql = new DAOMySql();

//     daoMsql.insert(user, function(result, err) { 
//         if (err) {
//             callback (null, err);
//         } else {
//             callback(result)
//         }
//     })
// }

// get student object from DB model
BackendController.prototype.getStudent = function(req, callback){

    var daoMsql = new DAOMySql();

    daoMsql.getStudent(req.userId,  function(result, err) { 
        console.log("Enter to the get student function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// update student object from DB model
BackendController.prototype.updateStudent = function(req, callback){

    // student object with updated details
    var student = new Student(
        req.studentId, 
        req.studentFname, 
        req.studentLname, 
        req.studentAddress, 
        req.studentPhone, 
        req.studentEmail, 
        req.studentImgLink, 
        req.studentDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateStudent(student, function(result, err) { 
        console.log("Enter to the update student function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

module.exports = BackendController;
