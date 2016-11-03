const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var isTuesday = function(day){
   var todaysDate = new Date();
        today = todaysDate.getDay();
        currentDay = days.indexOf(day);

   var checkDay = today === currentDay;
   console.log(checkDay);
   return checkDay;
}

var result = isTuesday('Tuesday');
var assert = require('assert')

assert.equal(result, false);
