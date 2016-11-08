const date = new Date('2010-04-01');
console.log(date);
var weekDays = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var sameWeekday = function(today, dayAgo){
      var isSameDay = today === dayAgo;
      console.log(isSameDay);
      return isSameDay;
}
var pastDay = weekDays[date.getDay()];
var currentDay = new Date();

const todaysDayIs = weekDays[currentDay.getDay()];
sameWeekday(todaysDayIs, pastDay)



var isSameWeekday = function(todaysDate, dateAgo){
    const currentDate = new Date(todaysDate);
    var currentDay = weekDays[currentDate.getDay()];
    console.log(currentDay);
    const pastDate = new Date(dateAgo);
    var pastDay = weekDays[pastDate.getDay()];
    console.log(pastDay);
      var isSameDay = currentDay === pastDay;
      return isSameDay;
}

console.log(isSameWeekday('2016-11-07','2010-03-01'));
