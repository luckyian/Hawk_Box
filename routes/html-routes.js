const path = require("path");
const db = require("../models");

// const router = require("express").outer();

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/homepage.html"));
  });

  app.get("/blogpost", function (req, res) {
    // db.Cats.findAll({}).then(function(data){
    //   var hbsObject = {
    //     cats: data.map( cat => cat.dataValues)
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    // })
    db.Post.findAll({}).then((data) => {
      let hbsObject = {
        posts: data.map((post) => post.dataValues),
      };
      console.log(hbsObject);
      res.render("blogpost", hbsObject);
    });
  });

  app.get("/newpost", function (req, res) {
    res.render("newpost");
  });

  app.get("/singlepost", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/singlepost.html"));
  });
};
