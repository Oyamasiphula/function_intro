const date = new Date('2010-04-01');
const assert = require('assert');

var weekDays = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var getDay = function(){
    var dayItWas = weekDays[date.getDay()];
    console.log(dayItWas);
    return dayItWas
}
assert.equal(getDay(), "Thursday");
