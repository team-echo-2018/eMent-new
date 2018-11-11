/* ---------  REQUIRES   -----------*/
var mysql      = require('mysql');
var Utils      = require('../util/utils');
var DB         = require('../config/database.config');


/* -----  CONFIGURATION DATABASE   -------*/
var connection = mysql.createConnection(DB);


function DatabaseMySql() {  }

/* ---------  DATABASE - METHODS   -----------*/

// not used yet.... don't change
DatabaseMySql.prototype.insert = function (user, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  //connection.connect();
  connection.beginTransaction(function(err) {
    if (err) { callback (null, err); }

    var sqlUser = utils.getInsertSqlUser(user);
      
    /* -- Start insert USER with PK from ADDRESS -- */
    insertSql(sqlUser, function(result, err){
      if(err){
        connection.rollback();
        callback (null, err);
      } else {
        connection.commit(function(err) {
          if (err) { 
            connection.rollback();
            callback (null, err);
          }
          console.log('Transaction Complete.');
          //connection.end();
          callback("User successfully inserted into the system!");
        });
      }
    });
  });
}

// get user object relevant to DB
DatabaseMySql.prototype.getUser = function (userName, callback) {
  
  var utils = new Utils();
  
  var sqlSelectUser = utils.getSqlSelectUser(userName);
  
  connection.query(sqlSelectUser, function(err, resultUser) {
    if (err || resultUser.length == 0) {
      callback (null, err);
    } else {
      callback(utils.generateUser(resultUser[0]));
    }
  });
}

// get student object relevant to DB
DatabaseMySql.prototype.getStudent = function (studentId, callback) {

  var utils = new Utils();

  var sqlSelectStudent = utils.getSqlSelectStudent(studentId);

  connection.query(sqlSelectStudent, function(err, resultStudent) {
    if (err || resultStudent.length == 0) {
      callback (null, err);
    } else {
      callback (utils.generateStudent(resultStudent[0]));
    }
  });
}

// update student object relevant to DB
DatabaseMySql.prototype.updateStudent = function (student, callback) {
  
  var utils = new Utils();

  /* -- Start transation -- */
  //connection.connect();
  connection.beginTransaction(function(err) {
    if (err) { callback (null, err); }

    var sqlUpdateStudent = utils.getSqlUpdateStudent(student);
    
    insertSql(sqlUpdateStudent, function(result, err){
      if(err){
        connection.rollback();
        callback (null, err);
      } else {
        connection.commit(function(err) {
          if (err) { 
            connection.rollback();
            callback (null, err);
          }
          console.log('Transaction Complete.');
          //connection.end();
          callback("Student successfully updated in the system!");
        });
      }
    });
  });
}

// DB query inserting function 
function insertSql(query, callback) { 
  connection.query(query, function(err, result) {
    if (err) {
      callback (null, err);
    } else {
      callback(result)
    }
  });
}



module.exports = DatabaseMySql;
