const assert = require('assert');

var isFromCapeTown = function(regNumber){
      var determinedResult = regNumber.startsWith('CA');
      console.log(determinedResult);
      return determinedResult;
}
assert.equal(isFromCapeTown('CA 98912'),true);
