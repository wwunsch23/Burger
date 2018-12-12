// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (tableInput, modelCallback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      modelCallback(result);
    });
  },
  insertOne: function (val1, val2, modelCallback) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);",
      [val1, val2],
      function (err, result) {
        if (err) {
          throw err;
        };
        modelCallback(result);
      });
  },
  updateOne: function (updateValue, paramId, modelCallback) {
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?",
      [updateValue, paramId],
      function (err, result) {
        if (err) {
          throw err;
        }
        modelCallback(result);
      });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
