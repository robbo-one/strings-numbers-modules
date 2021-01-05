
module.exports = {
  getType: getType,
  isNumber: isNumber,
  toNumber: toNumber,
  isStringNumber:isStringNumber,
  add: add,
  addStrings: addStrings,
  addStringsOrNumbers: addStringsOrNumbers,
  isEmail: isEmail,
  countIf :countIf 
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

  if (typeof(a) === "number" && typeof(b) === "number") {
   
    return a + b
  } 

  let answer =  Number(a) + Number(b)

  return answer.toString()
  
}

function isEmail (str) {

  var re = /\S+@\S+\.\S+/;
  return re.test(str);  

}

function countIf (array, fn) {

  let count = 0;
const answer = array.map(val => {
if (fn(val)){
  count ++
} 

})

return count
}

function filter (array, fn) {

console.log(array)

}

function map (array, fn) {
}

function filterStringsWithCommas (str) {
}

function splitStringByCommas (str) {
}

