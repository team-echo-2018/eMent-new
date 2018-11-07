/* ---------  REQUIRES   -----------*/

var User = require('../entities/user');
var Student = require('../entities/student');



/* ------ UTILS FUNCTIONS ------- */

function Utils () { }

Utils.prototype.getInsertSqlUser = function(user) {
	
    var sqlUser =   "INSERT INTO users (user_type, user_name, user_password) VALUES (" +
        "'" + user.userType      + "', " + 
        "'" + user.userName      + "', " + 
        "'" + user.userPassword  + "')";
    return sqlUser;
}

// SQL query for select user by user name
Utils.prototype.getSqlSelectUser = function(userName) {
    
    var sqlSelectUser = "SELECT * FROM  users WHERE user_name like '" + userName + "'";
    
    return sqlSelectUser;
};

// SQL query for select student by student id
Utils.prototype.getSqlSelectStudent = function(studentId) {

    var sqlSelectStudent = "SELECT * FROM student WHERE student_id=" + studentId;

    return sqlSelectStudent;
};

// SQL query for update student by student id
Utils.prototype.getSqlUpdateStudent = function(student) {

    var sqlUpdateStudent = "UPDATE student SET" +
        " student_fname='" + student.studentFname + "'," +
        " student_lname='" + student.studentLname + "'," +
        " student_address='" + student.studentAddress +"'," + 
        " student_phone='" + student.studentPhone + "'," + 
        " student_email='" + student.studentEmail + "'," + 
        " student_imglink='" + student.studentImgLink + "'," +
        " student_description='" + student.studentDescription + "' WHERE" + 
        " student_id=" + student.studentId;

    return sqlUpdateStudent;
};

// user object generating function
Utils.prototype.generateUser = function(resultUser) {
    var user = null;
    if(resultUser) {
        user = new User(
            resultUser.user_id, 
            resultUser.user_name,
            resultUser.user_password,
            resultUser.user_type);
    } 
    return user;
};

// student object generating function
Utils.prototype.generateStudent = function(resultStudent) {
    var student = null;
    if(resultStudent) {
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

// export utils function
module.exports = Utils;