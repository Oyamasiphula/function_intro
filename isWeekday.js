const assert = require('assert');
const date = new Date('2016-11-07');

var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//return index between 0 and 6
var isWeekday = function(actualDay){
  console.log(date.getDay());
  //look up the week day text string from the Array
  var isWeekdayValidation = weekDays.indexOf(actualDay) <= weekDays.indexOf(weekDays[date.getDay()]);
  console.log(isWeekdayValidation);
  return isWeekdayValidation
}
// assert.equal(isWeekday("Monday"),true);
// isWeekday("Tuesday");
// isWeekday("Wednesday");
// isWeekday("Thursday");
// assert.equal(isWeekday("Friday"),true);
//
// // weekend below
assert.equal(isWeekday("Saturday"),true);
// isWeekday("Sunday");
