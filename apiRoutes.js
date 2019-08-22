const friends = require('./FriendFinder/app/data/friends')


module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json({
      message: "Hello World!"
    })
  });

  app.post("/api/friends",function (req, res) {
    var userScore = {
      name: $("#name").val(),
      image: $("#image").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };
    console.log(userScore)
    var match;
    var difference = 100;
    friends.forEach(friend => {
      var temp = 0;
      for (i = 0; i < friend.scores.length; i++) {
        temp += Math.abs(parseInt(friend.scores[i] - userScore[i]))
      }
      if (temp < difference) {
        difference = temp;
        match = friend;
        console.log(req.body.data)
        friends.push(req.body.data)
      }
    })
    res.send(match)
  })
}
