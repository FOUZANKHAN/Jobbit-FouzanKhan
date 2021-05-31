const date = require(__dirname + "/date.js");
const express = require("express");
const app = express();

app.listen(3002, function() {
  console.log("DateCheck");
  randomString = "5:17:48 PM Sunday, May 20";
  remainderFunction(randomString);
  //console.log(Job.find({},{_id:0,CreatedAt:true}));
});

function remainderFunction(dateToCheck){
  createdAtString = dateToCheck.split(" ");
  //const todayString = date.getDate();
  var todaySubString = date.getDate().split(" ");//dividdes the date string on space
  //output for substring is [ '8:10:48', 'PM', 'Monday,', 'May', '31' ]
  //substring[3] = 'May'
  //substring[4] = '31'
  var dateInInt = parseInt(todaySubString[4],10);
  var month = todaySubString[3];
  var checkingMonth = createdAtString[3];
  var checkingDate = parseInt(createdAtString[4],10);
  if(dateInInt ===  checkingDate + 11){
    console.log("true");
  }
  else if(30>= checkingDate && checkingDate >= 20){
    console.log("shift to next month");
  }
  else{
    console.log("will do nothing");
  }
}
