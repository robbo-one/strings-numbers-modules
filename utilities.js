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
  // if(typeof a === String || typeof b === String) {
  //   return addStrings(a, b)
  // }
  return a + b
}

function addStrings (a, b) {
  // console.log(typeof a, typeof b)
  // console.log(Number(a))
  // let sum = (Number(a) + Number(b))
  // console.log(sum)
  return (Number(a) + Number(b)).toString()
}

function addStringsOrNumbers (a, b) {
  // console.log(a,b)
  // console.log(typeof a, typeof b)
  // if(typeof a === "string" && typeof b === "string") {
  //   return addStrings(a, b)
  // } else
  if (typeof a === "string" || typeof b === "string"){
  return addStrings(a, b)
  } else {
    return add(a, b)
  }
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

