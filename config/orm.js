
var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";" 
      connection.query(queryString, function (err, res) {
        if (err) { throw err;
        }
        cb(res);
      });
     
},
    insertOne: function(table, col, col2, val, val2, cb) {
        connection.query('INSERT INTO ' + table + '(??, ??) Values (?,?);', [col, col2, val, val2], function (error, res) {
            if (error) throw error;
           cb(res);
          });
           
      
    },

    updateOne: function(table, boolean, id, val, cb) {
        connection.query('UPDATE ' + table + ' SET devoured = ? WHERE ?? = ? ',[boolean, id, val], function (error, res) {
            if (error) {throw error;
            }
           cb(res);
          });
           
         
    }
}

module.exports = orm;
