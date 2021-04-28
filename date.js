exports.getDate = function(){
  const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var date_n_day = today.toLocaleDateString("en-US", options);
var time_rn = today.toLocaleTimeString("en-US");
return (time_rn +" "+ date_n_day);
};
