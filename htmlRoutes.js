// .get route to survey
const path = require("path");

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./survey.html"));
  });
  //   catch-all route
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
  });
};
