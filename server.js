const express = require("express");
const exphbs = require("express-handlebars");
const passport = require("./config/passport");
const session = require("express-session");
const compression = require("compression");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
app.use(compression());
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Keeps track of our user's login status

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Engine to use handlebars
app.engine(
  "handlebars",
  exphbs({ defaultLayout: "main", extname: "handlebars" })
);
app.set("view engine", "handlebars");

//Create a customer helper for handlebars
let hbs = exphbs.create({});
hbs.handlebars.registerHelper("readMore", function (str) {
  if (str.length > 150) return str.substring(0, 150) + "...";
  return str;
});

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// require("./config/middleware/passport")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
