/* User Entity */
var User = function (userId, userName, userPassword, userType) {

    this.userId = userId;
    this.userName = userName;
    this.userPassword = userPassword;
    this.userType = userType;
}

module.exports = User;
