
module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber:isStringNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers
}

function getType (thing) {

  return typeof thing


}

function isNumber (thing) {

if (typeof(thing) === "number"){
return true}

return false
}

function toNumber (str) {

  return Number(str)

}

function isStringNumber (str) {

if (typeof(str) === "string"){

    if (Number(str)){
      return true
    }
    return false
}

}

function add (a, b) {

  if (typeof(a) === "number" && typeof(b) === "number") {
   
    return a + b
  } 
    
}

function addStrings (a, b) {

var answer = Number(a) + Number(b)

return answer.toString()
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

