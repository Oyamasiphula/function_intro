const assert = require('assert');

var greet = function(neighboursName){
    console.log("Hello : " + neighboursName);
  return "Hello : " + neighboursName;
}
assert.equal(greet('Songezo'),"Hello : Songezo");
