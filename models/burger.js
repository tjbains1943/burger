var orm = require("../config/orm.js")

var burgers = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(col, col2, val, val2, cb) {
      orm.insertOne("burgers", col, col2, val, val2, function(res) {
        cb(res);
      });
    },
    updateOne: function(boolean, id, val, cb) {
      orm.updateOne("burgers", boolean, id, val, function(res) {
        cb(res);
      });
    } 
  };
  
module.exports = burgers;