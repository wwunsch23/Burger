// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(controllerCallback) {
    orm.selectAll("burgers", function(result) {
      controllerCallback(result);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(val1, val2, controllerCallback) {
    orm.insertOne(val1,val2, function(result) {
      controllerCallback(result);
    });
  },
  updateOne: function(updateValue, paramId, controllerCallback) {
    orm.updateOne(updateValue, paramId, function(result) {
      controllerCallback(result);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
