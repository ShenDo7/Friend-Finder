const friends = require("./FriendFinder/app/public/friends");
// const userScores = require("./survey.html");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json({
      message: "Hello World!"
    });
  });

  app.post("/api/friends", function(req, res) {
    const userScore = req.body.scores;
    console.log("test" + req.body.scores);
    var match;
    var difference = 100;
    friends.forEach(friend => {
      var temp = 0;
      for (i = 0; i < friend.scores.length; i++) {
        temp += Math.abs(parseInt(friend.scores[i] - userScore[i]));
        // console.log(temp);
      }
      if (temp < difference) {
        // console.log("" + difference);
        difference = temp;
        match = friend;
        // console.log(friend);
      }
    });
    friends.push(req.body);
    console.log(match);
    res.send(match);
  });
};
