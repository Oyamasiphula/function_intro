const assert = require('assert');
const date = new Date('2010-04-01');

var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var sameWeekday = function(today, dayAgo) {
    var isSameDay = today === dayAgo;
    return isSameDay;
}
// instead I wanted to generate actual values for my parameters below is for day ago
var pastDay = weekDays[date.getDay()];
// instead I wanted to generate actual values for my parameters below is for todaysDay
var currentDay = new Date();
const todaysDayIs = weekDays[currentDay.getDay()];
// testing sameWeekday function
assert.equal(sameWeekday(todaysDayIs, pastDay), false)

var isItTheSameWeekday = function(todaysDate, dateAgo) {
    const currentDate = new Date(todaysDate);
    var currentDay = weekDays[currentDate.getDay()];
    const pastDate = new Date(dateAgo);
    var pastDay = weekDays[pastDate.getDay()];
    var isSameDay = currentDay === pastDay;
    return isSameDay;
}
assert.equal(isItTheSameWeekday('2016-11-07', '2010-03-01'),true)
