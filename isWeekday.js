// var isWeekday = function(){
// };

const date = new Date('2010-04-01');
var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday'];

//return index between 0 and 6
console.log(date.getDay());

//look up the week day text string from the Array
console.log(weekDays[date.getDay()]);
