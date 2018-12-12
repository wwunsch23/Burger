var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
  burger.selectAll(function(data) {
    var allBurgers = {
      burgers: data
    };
    console.log(allBurgers);
    response.render("index", allBurgers);
  });
});

router.post("/api/burgers", function(request, response) {
  burger.insertOne(request.body.burger_name, request.body.devoured, function(result) {
    // Send back the ID of the new quote
    response.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(request, response) {
  burger.updateOne(request.body.devoured, request.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
