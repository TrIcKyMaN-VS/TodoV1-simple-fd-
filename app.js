const express = require('express');

const bodyParser = require('body-parser');

const date = require( __dirname + '/date.js');

const day3 = require( __dirname + '/date.js');

var app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs");

var reqInps = ["Buy Food","Cook Food", "Eat Food"];

var WorkItems = [];

app.use(express.static("public"));


app.get("/", function (req,res) {

   
    const day = day3.getDay();

    res.render("lists", {listTittle : day, listNIt : reqInps});
    // res.send("hii")

  });

  
app.get("/work", function(req,res){
    res.render("lists", {listTittle : "Work List", listNIt : WorkItems})
})

  app.get("/about", function(req,res){
      res.render("about")
    })

    app.post("/", function(req,res){
      console.log(req.body);

      reqInp = req.body.inp1;
      
      if(req.body.list == 'Work List'){
        WorkItems.push(reqInp)
        res.redirect("/work");
      }else{
        reqInps.push(reqInp);
        res.redirect("/");
      }
      
      // res.send(body.)
    })




// app.post("/", function(req,res){

//   console.log(req.body);

//   reqInp = req.body.inp1;
//   reqInps.push(reqInp)
//   res.redirect("/")
// })


app.listen(3000, function () {
  console.log("port running on server 3000");
})
