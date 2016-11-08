const date = new Date('2016-11-07');
var weekDays = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var dayToday = function(){
  var dateNow = new Date();
  var today = weekDays[dateNow.getDay()];
  console.log(today);
  return today;
}
dayToday();
