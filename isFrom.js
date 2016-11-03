var assert = require("assert");

var listAllRegsFrom = function(regNos, location) {
    var regNumbersArr = regNos.split(',');
    var fromLocationRegList = [];

    for (var i = 0; i < regNumbersArr.length; i++) {
          if (regNumbersArr[i].startsWith(location)) {
                fromLocationRegList.push(regNumbersArr[i])
          }
    };

    console.log(fromLocationRegList);
    return fromLocationRegList;
};

    var FromNkandla = listAllRegsFrom('CA 433434,NKA 98984,CJ 65326,NCW 89342,NKA 00060,NAT 98658,NKA 9879','NKA');
    var expectedNkandlaRegNumbers = ["NKA 98984","NKA 00060","NKA 9879"];
assert.deepEqual(FromNkandla ,expectedNkandlaRegNumbers);

    var FromCapeTownCity = listAllRegsFrom('CA 433434,NKA 98984,CA 40050,CJ 65326,NCW 89342,NKA 00060,NAT 98658','CA');
    var expectedCTCRegNumbers = ["CA 433434","CA 40050"];
assert.deepEqual(FromCapeTownCity ,expectedCTCRegNumbers);

var isFrom = function(regNum, location){
    var validation = regNum.startsWith(location);
    console.log(validation);
    return validation;

}
const fromPaarl = isFrom('CJ 98912', 'CJ'); //returns true
assert.equal(fromPaarl, true);

const fromBellvile = isFrom('CJ 98912', 'CY'); //returns false
assert.equal(fromBellvile, false);

const fromBellville = isFrom('CY 874324', 'CY'); //returns true
assert.equal(fromBellville, true);

const fromCapeTown = isFrom('CY 874324', 'CA'); //returns false
assert.equal(fromCapeTown, false);
