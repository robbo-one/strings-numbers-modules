module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber: isStringNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  isEmail: isEmail,
  countIf: countIf,
  filter: filter,
  map: map,
  filterStringsWithCommas: filterStringsWithCommas,
  splitStringByCommas: splitStringByCommas
}


function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  // return typeof thing === Number
  // if (thing.isNumber) {return true}
  // else {return false}
  if (typeof thing === "number") {
    return true
  }
  return false
}

function toNumber (str) {
  return Number(str)
}

function isStringNumber (str) {
  console.log(str)
  if(isNaN(Number(str))) {
    return false
  }
  return true
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

