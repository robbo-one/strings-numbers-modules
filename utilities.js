module.exports = {
    getType: getType,
    isNumber: isNumber,
    toNumber : toNumber,
    isStringNumber: isStringNumber
  }


  function getType (thing) {
    return typeof thing
  }

function isNumber (thing) {
    if (typeof thing !== "number") {
        return false;
    } else if (typeof thing === "number") {
        return true;
    }    
}

function toNumber (str) {
    return Number (str);
}

function isStringNumber (str) {
    if (isNaN(str) === false) {
        return true;
    } else if (isNaN(str) === true) {
        return false;
    }
    
}

function add (a, b) {
}

function addStrings (a, b) {
}

function addStringsOrNumbers (a, b) {
}

function isEmail (str) {
}

function countIf (array, fn) {
}

function filter (array, fn) {
}

function map (array, fn) {
}

function filterStringsWithCommas (str) {
}

function splitStringByCommas (str) {
}

