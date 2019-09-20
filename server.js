// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

// local files
var friends = require("./FriendFinder/app/data/friends");

const app = express();

// Express data handleing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Routes
require("./apiRoutes")(app);
require("./htmlRoutes")(app);

module.exports = app;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./home.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listing on port ${PORT}!`);
});
