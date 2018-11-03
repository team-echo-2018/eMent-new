/* ---------  REQUIRES   -----------*/

var User = require('../entities/user');
var Student = require('../entities/student');



/* ------ UTILS FUNCTIONS ------- */

function Utils () { }

Utils.prototype.getInsertSqlUser = function(user) {
	
    var sqlUser =   "INSERT INTO users (user_type, user_name, user_password) VALUES (" +
        "'" + user.user_type      + "', " + 
        "'" + user.user_name      + "', " + 
        "'" + user.user_password  + "')";
    return sqlUser;
}

// SQL query for select user by user name
Utils.prototype.getSqlSelectUser = function(user_name) {
    
    var sqlSelectUser = "SELECT * FROM  users WHERE user_name like '" + user_name + "'";
    
    return sqlSelectUser;
};

// SQL query for select student by student id
Utils.prototype.getSqlSelectStudent = function(std_id) {

    var sqlSelectStudent = "SELECT * FROM student WHERE std_id=" + std_id;

    return sqlSelectStudent;
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
            resultStudent.std_id, 
            resultStudent.std_fname, 
            resultStudent.std_lname, 
            resultStudent.std_address, 
            resultStudent.std_phone, 
            resultStudent.std_email, 
            resultStudent.std_image, 
            resultStudent.std_description);
    }
    return student;
}

// export utils function
module.exports = Utils;