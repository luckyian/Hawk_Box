const path = require("path");
const db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", function (req, res) {
    db.Posts.findOne({
      order: [["id", "DESC"]],
      limit: 1,
    }).then((data) => {
      console.log(data);
      res.render("homepage", data);
    });
  });

  app.get("/blogpost", function (req, res) {
    db.Posts.findAll({}).then((data) => {
      let hbsObject = {
        posts: data.map((post) => post.dataValues),
      };
      res.render("blogpost", hbsObject);
    });
  });

  app.get("/newpost", function (req, res) {
    res.render("newpost");
  });

  app.get("/singlepost/:id", function (req, res) {
    db.Posts.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.Comments,
        },
      ],
    }).then((data) => {
      console.log(data);
      res.render("singlepost", data);
    });
  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the homepage page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the homepage page
    if (req.user) {
      res.redirect("/");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/", isAuthenticated, function (req, res) {
    db.Posts.findOne({
      order: [["id", "DESC"]],
      limit: 1,
    }).then((data) => {
      console.log(data);
      res.render("homepage", data);
    });
  });
};
