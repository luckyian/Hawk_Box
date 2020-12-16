const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/homepage.html"));
  });
  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/blogpost.html"));
  });

  app.get("/newpost", function(req, res){
    res.sendFile(path.join(__dirname, "../views/newpost.html"));
  });

};