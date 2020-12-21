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
    db.Post.findAll({
      where: query,
    }).then(function (dbPost) {
      
      res.json(dbPost);
    });
  });

  app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's user and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        user: req.user.user,
        id: req.user.id
      });
    }
  });

  app.post("/api/newpost", function (req, res) {
    // let video = req.body.video;
    // console.log(video);
    // let newVideoStr = video.replace("watch", "embed");
    // console.log(newVideoStr);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      video: req.body.video,
    }).then(function (post) {
     
      res.json(post);
    });
  });
};
