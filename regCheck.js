const assert = require('assert');

var regCheck = function(registrationNo,province){
    var validation = registrationNo.endsWith(province)
    return validation;
}

var isFrom = function(registrationNo,province){
    var validation = registrationNo.startsWith(province)
    console.log(validation)
    return validation
}

var isGP = regCheck('DV 23 NB GP', 'GP');

//should print true
console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');
//should print false
console.log(isMP);

// should return true
var isBellville = isFrom('CY189-012', 'CY');
//should return false
var isDurban = isFrom('CY189-012', 'ND');
