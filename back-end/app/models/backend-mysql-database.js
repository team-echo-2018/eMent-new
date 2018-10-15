/* ---------  REQUIRES   -----------*/
var mysql      = require('mysql');
var Utils      = require('../util/utils');


/* -----  CONFIGURATION DATABASE   -------*/
var connection = mysql.createConnection({
  connectionLimit : 2,
  host     : 'localhost',
  port     : '3306',
  database: "ement_db",
  user     : 'root',
  password : ''
});


function DatabaseMySql() {  }

/* ---------  DATABASE - METHODS   -----------*/

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


DatabaseMySql.prototype.getUser = function (user_name, callback) {
  
  var utils = new Utils();
  
  var sqlSelectUser = utils.getSqlSelectUser(user_name);
  
  connection.query(sqlSelectUser, function(err, resultUser) {
    if (err || resultUser.length == 0) {
      callback (null, err);
    } else {
      callback(utils.generateUser(resultUser[0]));
    }
  });
}

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
