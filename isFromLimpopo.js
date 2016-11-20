const assert = require('assert');
// unique char of Limpopo
var isFromLimpopo = function(registrationNumber){
    var evalutionBylastChars = registrationNumber.endsWith('L');
    console.log(evalutionBylastChars);
    return evalutionBylastChars;
}
assert.equal(isFromLimpopo('DRT 122 L'), true)

// Advanced functions
// first type
var isFromLimpopoCheck2 = function(registrationNumber) {
    var evalutionByFirstChars = registrationNumber.startsWith('DRT')
    var evalutionBylastChars = registrationNumber.endsWith('L');
    strictCheck = evalutionByFirstChars === evalutionBylastChars;
    console.log(strictCheck);
    return strictCheck;
}
assert.equal(isFromLimpopoCheck2('DRT 122 L'), true);

// Warning this might be a fake registration Number
assert.equal(isFromLimpopoCheck2('DDT 122 L'), false)
// 2nd type
var isFromLimpopoCheck2 = function(registrationNumber) {
    var evalutionByFirstChars = registrationNumber.startsWith('BBC')
    var evalutionBylastChars = registrationNumber.endsWith('L');
    strictCheck = evalutionByFirstChars === evalutionBylastChars;
    console.log(strictCheck);
    return strictCheck;
}
assert.equal(isFromLimpopoCheck2('BBC 123 L'), true);
// Warning this might be a fake registration Number
assert.equal(isFromLimpopoCheck2('B 123 L'), false);
