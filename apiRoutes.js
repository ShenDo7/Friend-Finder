const friends = require('./FriendFinder/app/data/friends')


module.exports = function(app){
  app.get("/api/friends", function(req, res){
    res.json({
      message: "Hello World!"
    })
  });
  
  app.post("/api/friends", function(req, res){
    var userScore = req.body.scores;
    var match ;
    var difference = 100;
    friends.forEach(friend=>{
      var temp = 0;
      for(i=0;i<friend.scores.length;i++){
        temp += Math.abs(parseInt(friend.scores[i] - userScore[i]))
        }
        if (temp<difference){
          difference = temp;
          match = friend;
          friends.push(req.body.data)
      }
    })
    res.send(match)
  })
}
