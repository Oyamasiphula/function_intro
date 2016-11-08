const assert = require('assert');

var isFromGauteng = function(regNumber){
    var determinedResult = regNumber.endsWith('GP');
    return determinedResult;
}
assert.equal(isFromGauteng('DR 12 TY GP'),true);
