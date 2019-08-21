// .get route to survey

app.get("/survey", function(req, res){
    res.json({
      message: "Hello World!"
    })
  });

//   catch-all route
  app.get("*", function(req, res){
    res.redirect("/");
  })

