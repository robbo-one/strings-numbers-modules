module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber: isStringNumber,

}

function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  if (typeof thing === 'number') {
    return true
  } else {
    return false
  }
}

function toNumber (str) {
  return parseInt(str)
}

function isStringNumber (str) {
  /*if (typeof str === 'string') {
    return true
  } else if () {
    return false
  }*/
  /*> NaN == NaN
false
> isNaN(NaN)
true */
  if (typeof str === isNaN()) {
    return true
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

