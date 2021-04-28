const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/jobsearchDB", {useNewUrlParser: true, useUnifiedTopology: true});

const jobsSchema = new mongoose.Schema({
  companyName:String,
  role:String,
  url:String,
  remoteOption: String,
  techStack:String,
  createdAt:String
});
asdvdasvadsvdvsa

const Job = mongoose.model("Job",jobsSchema);

const job1 = new Job ({
  companyName:"Fouzan Industries",
  role:"Application Developer",
  site:"LinkedIn",
  url:"https:/consider this to be a http thing",
  techStack:"MERN"
});
//This is to populate the database with our model that we created above
// Job.create(job1,function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("We good Bro");
//   }
// });

app.get("/", function(req,res){
  //res.render("home");
  Job.find({},function(err,foundJobs){
    if(err){
      console.log(err);
    }
    else{
    res.render("home",{appliedJobs: foundJobs});
  }
});


});

app.post("/home",function(req,res){

  const newJob = {
    companyName :req.body.companyName,
    role : req.body.role,
    url : req.body.url,
    techStack : req.body.techStack,
    remoteOption:req.body.remoteChecker,
    createdAt: date.getDate()
    }

    Job.create(newJob,function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("We got whatever you typed in");
        res.redirect("/");
      }
    });

});






app.listen(3000, function() {
  console.log("Jobbit server is up and running");
  console.log(date.getDate());
});
