const assert = require('assert');

var isFromBellville = function(regNumber){
      var determinedResult = regNumber.startsWith('CY')
      return determinedResult;
}
assert.equal(isFromBellville('CJ 98912'),false);
