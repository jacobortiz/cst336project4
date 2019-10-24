const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/ai", function(req, res) {
    res.render("ai.html");
});

app.get("/os", function(req, res) {
    res.render("os.html");
});

app.get("/pl", function(req, res) {
    res.render("pl.html");
});

app.get("/virus", function(req, res) {
    res.render("virus.html");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server is running...");
})