var express = require("express"),
path = require("path"),
app=express();

app.set("views",path.join("public","views"));
app.engine("html",require("ejs").renderFile );
app.set("view engine","html");
app.use(express.static("public"))

app.get("/contact",function(req,res) {
    res.render("contact");
});
app.get("/home",function(req,res){
    res.render("home");
});
app.get("/project",function(req,res){
    res.render("project");
})
app.get("/rezume",function(req,res){
    res.render("rezume");
});



app.listen(2000,function() {
    console.log(`Server started on port`);
});