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


/* ------ UTILS FUNCTIONS ------- */

function Utils() { }

Utils.prototype.getInsertSqlUser = function (user) {

    var sqlUser = "INSERT INTO users (user_type, user_name, user_password) VALUES (" +
        "'" + user.userType + "', " +
        "'" + user.userName + "', " +
        "'" + user.userPassword + "')";
    return sqlUser;
}

// SQL query for select user by user name
Utils.prototype.getSqlSelectUser = function (userName) {

    var sqlSelectUser = "SELECT * FROM  users WHERE user_name like '" + userName + "'";

    return sqlSelectUser;
};

// SQL query for select student by student id
Utils.prototype.getSqlSelectStudent = function (studentId) {

    var sqlSelectStudent = "SELECT * FROM student WHERE student_id=" + studentId;

    return sqlSelectStudent;
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

// SQL query for select mentor by mentor id
Utils.prototype.getSqlSelectMentor = function (mentorId) {

    var sqlSelectMentor = "SELECT * FROM mentor WHERE mentor_id=" + mentorId;

    return sqlSelectMentor;
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

// export utils function
module.exports = Utils;