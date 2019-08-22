const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./apiRoutes')(app)
require('./htmlRoutes')(app)
const PORT = process.env.PORT || 8080;

module.exports = app;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./home.html"));
   });

app.listen(PORT, ()=>{
    console.log(`Server listing on port ${PORT}!`)
})

