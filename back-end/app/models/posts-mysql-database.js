/**
 * Definitions for DB models related functions.
 * Backend-Controller will call to here and this will call to Utils.
 **/

/* ---------  REQUIRES   -----------*/
var mysql      = require('mysql');
var Utils      = require('../util/utils');
var DB         = require('../config/database.config');

/* -----  CONFIGURATION DATABASE   -------*/
var connection = mysql.createConnection(DB);

function PostsMysql() {}

/* ---------  DATABASE - METHODS   -----------*/

// get student object relevant to DB
PostsMysql.prototype.getPost = function (err, callback) {

    var utils = new Utils();
  
    var sqlSelectPost = utils.selectPosts();
  
    connection.query(sqlSelectPost, function(err, resultPosts) {
      if (err || resultPosts.length == 0) {
        callback (null, err);
      } else {
        //callback (utils.generateStudent(resultStudent[0]));
        return resultPosts;
      }
    });
  }

// updating a post

  PostsMysql.prototype.updatePost = function (Post, callback) {
  
    var utils = new Utils();
  
    /* -- Start transation -- */
    //connection.connect();
    connection.beginTransaction(function(err) {
      if (err) { callback (null, err); }
  
      var sqlUpdatePost = utils.updatePosts(Post);
      
      connection.query(sqlUpdatePost, function(result, err){
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
            callback("Post successfully updated in the system!");
          });
        }
      });
    });
  }

  //Delete POSTs

  PostsMysql.prototype.deletePost = function (err, callback) {

    var utils = new Utils();
  
    var sqldeletePost = utils.deletePost(Post);
  
    connection.query(sqldeletePost, function(err, resultPosts) {
      if (err || resultPosts.length == 0) {
        callback (null, err);
      } else {
        //callback (utils.generateStudent(resultStudent[0]));
        return resultPosts;
      }
    });
  }

  /* Update Mysql */

  