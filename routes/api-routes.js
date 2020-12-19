const db = require("../models");

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
