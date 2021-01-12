const db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    const query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    db.Posts.findAll({
      where: query,
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function (req, res) {
    db.Users.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.post("/api/newpost", function (req, res) {
    db.Posts.create({
      title: req.body.title,
      body: req.body.body,
      video: req.body.video,
    }).then(function (post) {
      res.json(post);
    });
  });

  app.post("/api/comments", function (req, res) {
    db.Comments.create({
      user: req.user,
      body: req.body.comment,
    }).then(function (comment) {
      res.json(comment);
    });
  });
};
