const date = new Date('2016-11-07');
var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//return index between 0 and 6
var isWeekday = function(actualDay){
  console.log(date.getDay());
  //look up the week day text string from the Array
  // console.log(weekDays[date.getDay()]);
  // console.log(weekDays.indexOf(actualDay));
  // console.log(weekDays.indexOf(weekDays[date.getDay()]));
  var isIt = weekDays.indexOf(actualDay) <= weekDays.indexOf(weekDays[date.getDay()]);
  console.log(isIt);
}

// isWeekday("Monday");
// isWeekday("Tuesday");
// isWeekday("Wednesday");
// isWeekday("Thursday");
// isWeekday("Friday");
//
// // weekend below
isWeekday("Saturday");
// isWeekday("Sunday");
