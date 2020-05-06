// Header space for easier readability

// Inside the burgers_controller.js file, import the following:
// Express
var express = require("express");

var router = express.Router();
// task.js
// Create the router for the app, and export the router at the end of your file.
// Import the model (task.js) to use its database functions.
var task = require("../models/task.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  task.all(function(data) {
    var hbsObject = {
      tasks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/tasks", function(req, res) {
  task.create([
    "name", "complete"
  ], [
    req.body.name, req.body.complete
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/tasks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  task.update({
    complete: req.body.complete
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/tasks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  task.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
