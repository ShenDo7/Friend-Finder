const friends = require("./FriendFinder/app/data/friends");
const userScores = require("./survey.html");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json({
      message: "Hello World!"
    });
  });

  app.post("/api/friends", userScores, function(req, res) {
    var match;
    var difference = 100;
    friends.forEach(friend => {
      var temp = 0;
      for (i = 0; i < friend.scores.length; i++) {
        temp += Math.abs(parseInt(friend.scores[i] - userScore[i]));
      }
      if (temp < difference) {
        difference = temp;
        match = friend;
      }
    });
    console.log(req.body.data);
    friends.push(req.body.data);
    res.send(match);
  });
};
