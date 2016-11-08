const assert = require('assert');

var isFromPaarl = function(regNumber) {
    var determinedResult = regNumber.startsWith('CJ');
    return determinedResult;
}
assert.equal(isFromPaarl('CJ 98912'), true);
