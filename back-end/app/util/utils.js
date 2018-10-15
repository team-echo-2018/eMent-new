/* ---------  REQUIRES   -----------*/

var User = require('../entities/user');

/* ------ UTILS FUNCTIONS ------- */

function Utils () { }

Utils.prototype.getInsertSqlUser = function(user) {
	
    var sqlUser =   "INSERT INTO users (user_type, user_name, user_password) VALUES (" +
        "'" + user.user_type      + "', " + 
        "'" + user.user_name      + "', " + 
        "'" + user.user_password  + "')";
    return sqlUser;
}

Utils.prototype.getSqlSelectUser = function(user_name) {
    
    var sqlSelectUser= "SELECT * FROM  users WHERE user_name like '" + user_name + "'";;
    
    return sqlSelectUser;
};


Utils.prototype.generateUser = function(resultUser) {
    var user = null;
    if(resultUser) {
        user = new User(resultUser.user_id, 
            resultUser.user_name,
            resultUser.user_password,
            resultUser.user_type);
    } 
    return user;
};

module.exports = Utils;