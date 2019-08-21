app.get("/api/friends", function(req, res){
    res.json({
      message: "Hello World!"
    })
  });
  
  app.post("/api/friends", function(req, res){
    console.log(req.body);
    res.send("Hey!")
  })

