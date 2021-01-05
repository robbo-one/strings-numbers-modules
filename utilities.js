module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber: isStringNumber,
  add: add,
  addStrings: addStrings
}

function getType (thing) {
  return(typeof thing)
}

function isNumber (thing) {
  if (typeof thing != "number")
  return false
  else {
    return true
  }
}

function toNumber (str) {
  return parseInt(str)
}

function isStringNumber (str) {
  return !isNaN(str)
}

function add (a, b) {
 return a + b
}

function addStrings (a, b) {
  return a + parseInt(b)

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

