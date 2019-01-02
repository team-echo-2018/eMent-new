/**
 * Main Controller for backend query functions
 * Routers will call to this controller and this will call to Database Model
 */


/* ---------  REQUIRES   -----------*/

var Company = require('../entities/company');
var Mentor = require('../entities/mentor');
var Milestone = require('../entities/milestone');
var Project = require('../entities/project');
var ProjectIdea = require('../entities/projectIdea');
var Skill = require('../entities/skill');
var Student = require('../entities/student');
var Task = require('../entities/task');
var User = require('../entities/user');
var DAOMySql = require('../models/backend-mysql-database');
var PostMySql =require('../models/posts-mysql-database');


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


/* User Authentcation function */
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


// Student Object related functions ..............................................................
// Get student object from DB model
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

// Update student object from DB model
BackendController.prototype.updateStudent = function(req, callback){

    // Student object with updated details
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



// Mentor Object related functions ..............................................................
// Get mentor object from DB model
BackendController.prototype.getMentor = function(req, callback){

    var daoMsql = new DAOMySql();

    daoMsql.getMentor(req.userId,  function(result, err) { 
        console.log("Enter to the get mentor function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update mentor object from DB model
BackendController.prototype.updateMentor = function(req, callback){

    // Mentor object with updated details
    var mentor = new Mentor(
        req.mentorId, 
        req.mentorFname, 
        req.mentorLname, 
        req.mentorAddress, 
        req.mentorPhone, 
        req.mentorEmail, 
        req.mentorImgLink, 
        req.mentorDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateMentor(mentor, function(result, err) { 
        console.log("Enter to the update mentor function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

<<<<<<< HEAD
//insert posts
 BackendController.prototype.insertPost =function(req,callback){
     var Post =new Post(
         req.postId,
         req.postauthor,
         req.postheading,
         req.postbody
     );
    
    var PoMsql = new PostMySql();

    PoMsql.insertPost(Post,function(req,err){
        if(err || !result){
            console.log("error in inserting post");
            callback(null,err);
            
        } else{
            callback(result);
        }
    })

 }

 //get posts from database

 BackendController.prototype.getPosts = function(req, callback){

    var PoMsql = new PostMySql();

    PoMsql.getPost(req,  function(result, err) { 
        console.log("connecting to database and getting posts");
=======


// Company Object related functions ..............................................................
// Get company object from DB model
BackendController.prototype.getCompany = function(req, callback){

    var daoMsql = new DAOMySql();

    daoMsql.getCompany(req.companyId,  function(result, err) { 
        console.log("Enter to the get company function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update company object from DB model
BackendController.prototype.updateCompany = function(req, callback){

    // Company object with updated details
    var company = new Company(
        req.companyId, 
        req.companyName, 
        req.companyAddress, 
        req.companyPhone, 
        req.companyEmail, 
        req.companyDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateCompany(company, function(result, err) { 
        console.log("Enter to the update company function");
>>>>>>> bdae0c29a6b00305791f4ead6443ab692f4c4682
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
<<<<<<< HEAD
BackendController.prototype.deletePosts = function(req, callback){

    var PoMsql = new PostMySql();

    PoMsql.deletePost (req,  function(result, err) { 
        console.log("connecting to database and getting posts");
=======



// Milestone Object related functions ..............................................................
// Get milestone object from DB model
BackendController.prototype.getMilestone = function(req, callback){

    var daoMsql = new DAOMySql();

    daoMsql.getMilestone(req.milestoneId,  function(result, err) { 
        console.log("Enter to the get milestone function");
>>>>>>> bdae0c29a6b00305791f4ead6443ab692f4c4682
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
<<<<<<< HEAD
    
BackendController.prototype.updatePost =function(req,callback){

    var PoMsql = new PostMySql();

    var Post =new Post(
        req.postId,
        req.postauthor,
        req.postheading,
        req.postbody
    );

    PoMsql.updatePost =function(req,callback){
        var PoMsql = new PostMySql();

        PoMsql.updatePost(Post,function(result,err){
            if(err || !result){
                console.log("** error or no result");
                callback(null, err);
            }else{
                callback(result);
            }
        })
    }
=======

// Update milestone object from DB model
BackendController.prototype.updateMilestone = function(req, callback){

    // Milestone object with updated details
    var milestone = new Milestone(
        req.milestoneId, 
        req.milestoneSupposedDate, 
        req.milestoneArchivedDate, 
        req.milestoneDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateMilestone(milestone, function(result, err) { 
        console.log("Enter to the update milestone function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
>>>>>>> bdae0c29a6b00305791f4ead6443ab692f4c4682
}

module.exports = BackendController;
