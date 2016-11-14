const assert = require('assert');

var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var endOfWeek = weekDays.indexOf('Friday');

var checkIfItsaWeekday = function(day){
  weekDays.indexOf(day)
  //look up the week day text string from the Array
  var isWeekdayValidation = weekDays.indexOf(day) <= endOfWeek ;
  console.log(isWeekdayValidation);
  return isWeekdayValidation
};
// assert.equal(checkIfItsaWeekday("Monday"),true);
assert.equal(checkIfItsaWeekday("Tuesday"),true);
// assert.equal(checkIfItsaWeekday("Wednesday"),true);
// assert.equal(checkIfItsaWeekday("Thursday"),true);
// assert.equal(checkIfItsaWeekday("Friday"),true);
// // weekend below
assert.equal(checkIfItsaWeekday("Saturday"),false);
// assert.equal(checkIfItsaWeekday(isWeekday("Sunday"),false);


var isWeekday = function(day){
      var isWeekdayValidation =! day.startsWith('S');
      return isWeekdayValidation;
};

// assert.equal(isWeekdayEvaluation("Monday"),true);
// assert.equal(isWeekdayEvaluation("Tuesday"),true);
assert.equal(isWeekday("Wednesday"),true);
// assert.equal(isWeekdayEvaluation("Thursday"),true);
// assert.equal(isWeekdayEvaluation("Friday"),true);
// // weekend below
assert.equal(isWeekday("Saturday"),false);
// assert.equal(isWeekdayEvaluation(isWeekday("Sunday"),false);
