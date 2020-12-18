const path = require("path");
const db = require("../models");

// Routes
// =============================================================
<<<<<<< HEAD

const db = require("../models");

// Routes
// =============================================================
=======
>>>>>>> 5ac8f935802af8eedb67aef56b258518138ee3eb
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/homepage.html"));
  });

  app.get("/blogpost", function (req, res) {
    db.Post.findAll({}).then((posts) => {
      console.log(posts);
      res.render("blogpost", posts);
    });

    res.render("blogpost");
  });

  app.get("/newpost", function (req, res) {
    res.render("newpost");
  });

  app.get("/singlepost", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/singlepost.html"));
  });
};
