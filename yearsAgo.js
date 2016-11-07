const assert = require('assert');

var yearsAgo = function(year){
    const currentDate = new Date()
    var currentYear = currentDate.getFullYear();
    var  longAgo = currentYear - year;
        return longAgo;
};
// did not feel like to hard code year,I want to generate value of year automaticaly
// by using JS Builtin functionality.
const date = new Date('1993-12-12');
var year = date.getFullYear();

// Test
console.log(23 === 23); //Visually I could see why its passing
assert.equal(yearsAgo(year), 23);

// Making the test fail by getting my function's end result as a value.
 // as a value which is not gonna be equal to 24
console.log(23 == 24); //Visually I could see why its failing
console.log(23 != 24); //really 23 is not equal with 24
assert.equal(yearsAgo(year), 24); //not getting same value as I've expceted 23 != 24.
