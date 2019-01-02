/**
 * Definitions for DB queries related functions.
 * Backend-Mysql-Database will call to here and this will call to entities.
 **/


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
var Post =require('../entities/posts');


/* ------ UTILS FUNCTIONS ------- */

function Utils() { }



// User Entity related functions
// SQL query for select user by user name
Utils.prototype.getSqlSelectUser = function (userName) {

    var sqlSelectUser = "SELECT * FROM  users WHERE user_name like '" + userName + "'";
    return sqlSelectUser;
};

// SQL query for insert user
Utils.prototype.getInsertSqlUser = function (user) {

    var sqlUser = "INSERT INTO users (user_type, user_name, user_password) VALUES (" +
        "'" + user.userType + "', " +
        "'" + user.userName + "', " +
        "'" + user.userPassword + "')";
    return sqlUser;
};

// SQL query for update user by id
Utils.prototype.getUpdateSqlUser = function (user) {

    var sqlUser = "UPDATE users SET" + 
        " user_type='" + user.userType + "'," + 
        " user_name='" + user.userName + "'," + 
        " user_password='" + user.userPassword + "' WHERE" +
        " user_id=" + user.userId;
    return sqlUser;
};

// SQL query for delete user by id
Utils.prototype.getSqlDeleteUser = function (user) {

    var sqlDeleteUser = "DELETE FROM users WHERE user_id=" + user.userId;
    return sqlDeleteUser;
};



// Student Entity related functions
// SQL query for select student by student id
Utils.prototype.getSqlSelectStudent = function (studentId) {

    var sqlSelectStudent = "SELECT * FROM student WHERE student_id=" + studentId;
    return sqlSelectStudent;
};

// SQL query for select student by student first name
Utils.prototype.getSqlSelectStudentByFname = function (studentFname) {

    var sqlSelectStudent = "SELECT * FROM  student WHERE student_fname like '" + studentFname + "'";
    return sqlSelectStudent;
};

// SQL query for insert student
Utils.prototype.getInsertSqlStudent = function (student) {

    var sqlInsertStudent = "INSERT INTO student (student_id, student_fname, student_lname, " +
        ", student_address, student_phone, student_email, student_imglink, student_description) VALUES (" +
              student.studentId + ", " +
        "'" + student.studentFname + "', " +
        "'" + student.studentLname + "', " +
        "'" + student.studentAddress + "', " +
        "'" + student.studentPhone + "', " +
        "'" + student.studentEmail + "', " +
        "'" + student.studentImgLink + "', " +
        "'" + student.studentDescription + "')";
    return sqlInsertStudent;
};

// SQL query for update student by student id
Utils.prototype.getSqlUpdateStudent = function (student) {

    var sqlUpdateStudent = "UPDATE student SET" +
        " student_fname='" + student.studentFname + "'," +
        " student_lname='" + student.studentLname + "'," +
        " student_address='" + student.studentAddress + "'," +
        " student_phone='" + student.studentPhone + "'," +
        " student_email='" + student.studentEmail + "'," +
        " student_imglink='" + student.studentImgLink + "'," +
        " student_description='" + student.studentDescription + "' WHERE" +
        " student_id=" + student.studentId;
    return sqlUpdateStudent;
};

// SQL query for delete student by id
Utils.prototype.getSqlDeleteStudent = function (student) {

    var sqlDeleteStudent = "DELETE FROM student WHERE student_id=" + student.studentId;
    return sqlDeleteStudent;
};



// Mentor Entity related functions
// SQL query for select mentor by mentor id
Utils.prototype.getSqlSelectMentor = function (mentorId) {

    var sqlSelectMentor = "SELECT * FROM mentor WHERE mentor_id=" + mentorId;
    return sqlSelectMentor;
};

// SQL query for select mentor by mentor first name
Utils.prototype.getSqlSelectMentorByFname = function (mentorFname) {

    var sqlSelectMentor = "SELECT * FROM  mentor WHERE mentor_fname like '" + mentorFname + "'";
    return sqlSelectMentor;
};

// SQL query for insert mentor
Utils.prototype.getInsertSqlMentor = function (mentor) {

    var sqlInsertMentor = "INSERT INTO mentor (mentor_id, mentor_fname, mentor_lname, " +
        ", mentor_address, mentor_phone, mentor_email, mentor_imglink, mentor_description) VALUES (" +
              mentor.mentorId + ", " +
        "'" + mentor.mentorFname + "', " +
        "'" + mentor.mentorLname + "', " +
        "'" + mentor.mentorAddress + "', " +
        "'" + mentor.mentorPhone + "', " +
        "'" + mentor.mentorEmail + "', " +
        "'" + mentor.mentorImgLink + "', " +
        "'" + mentor.mentorDescription + "')";
    return sqlInsertMentor;
};

// SQL query for update mentor by mentor id
Utils.prototype.getSqlUpdateMentor = function (mentor) {

    var sqlUpdateMentor = "UPDATE mentor SET" +
        " mentor_fname='" + mentor.mentorFname + "'," +
        " mentor_lname='" + mentor.mentorLname + "'," +
        " mentor_address='" + mentor.mentorAddress + "'," +
        " mentor_phone='" + mentor.mentorPhone + "'," +
        " mentor_email='" + mentor.mentorEmail + "'," +
        " mentor_imglink='" + mentor.mentorImgLink + "'," +
        " mentor_description='" + mentor.mentorDescription + "' WHERE" +
        " mentor_id=" + mentor.mentorId;
    return sqlUpdateMentor;
};

// SQL query for delete mentor by id
Utils.prototype.getSqlDeleteMentor = function (mentor) {

    var sqlDeleteMentor = "DELETE FROM mentor WHERE mentor_id=" + mentor.mentorId;
    return sqlDeleteMentor;
};




// Objects generating function definitions
// user object generating function
Utils.prototype.generateUser = function (resultUser) {
    var user = null;
    if (resultUser) {
        user = new User(
            resultUser.user_id,
            resultUser.user_name,
            resultUser.user_password,
            resultUser.user_type);
    }
    return user;
};

// student object generating function
Utils.prototype.generateStudent = function (resultStudent) {
    var student = null;
    if (resultStudent) {
        student = new Student(
            resultStudent.student_id,
            resultStudent.student_fname,
            resultStudent.student_lname,
            resultStudent.student_address,
            resultStudent.student_phone,
            resultStudent.student_email,
            resultStudent.student_imglink,
            resultStudent.student_description);
    }
    return student;
}

// mentor object generating function
Utils.prototype.generateMentor = function (resultMentor) {
    var mentor = null;
    if (resultMentor) {
        mentor = new Mentor(
            resultMentor.mentor_id,
            resultMentor.mentor_fname,
            resultMentor.mentor_lname,
            resultMentor.mentor_address,
            resultMentor.mentor_phone,
            resultMentor.mentor_email,
            resultMentor.mentor_imglink,
            resultMentor.mentor_description);
    }
    return mentor;
}

//add posts
Utils.prototype.addPosts =function(Post)
{
    var sqlInsertPost = "INSERT INTO posts (postId,postauthor,postheading,postbody) VALUES ("+
        "'"+Post.postId +"',"+
        "'"+Post.postauthor +"',"+
        "'"+Post.postheading +"',"+
        "'"+Post.postbody +"')";
    return sqlInsertPost;
}

//update posts

Utils.prototype.updatePosts =function(Post)
{
    var sqlUpdatePost = "UPDATE posts SET"+
        "postId='"+Post.postId +"',"+
        "postauthor='"+Post.postauthor +"',"+
        "postheading='"+Post.postheading +"',"+
        "postbody='"+Post.postbody +"')";

    return sqlUpdatePost;
}

//select all posts

Utils.prototype.selectPosts =function(){
    var selectSqlPost = "SELECT * FROM Post";

    return selectSqlPost;
}

//Delete Post
Utils.prototype.deletePost =function(Post){
    var deleteSqlPost ="DELETE FROM Post WHERE postId='"+Post.postId+"'";

    return deleteSqlPost;
}

// export utils
module.exports = Utils;