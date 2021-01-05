module.exports = {
  getType: getType,
  isNumber : isNumber,
  toNumber : toNumber,
  isStringNumber : isStringNumber,
  add : add,
  addStrings : addStrings,
  addStringsOrNumbers : addStringsOrNumbers,
  isEmail : isEmail,
  countIf : countIf,
  filter : filter,
  map : map,
  filterStringsWithCommas : filterStringsWithCommas
}


function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
 if (getType(thing) == "number"){
   return true
 } else {
   return false
 }
}

function toNumber (str) {
  return parseInt(str,10)
}

function isStringNumber (str) {
  if(isNaN(toNumber(str)) === true){
    return false
  } else {
    return true
  }
}

function add (a, b) {
  return a + b
}

function addStrings (a, b) {
  a = toNumber(a)
  b = toNumber(b)
  var num = a + b
  return num.toString()
}

function addStringsOrNumbers (a, b) {
  if (isNumber(a) == false || isNumber(b) == false) {
    a = toNumber(a)
    b = toNumber(b)
    var sum = a + b
    return sum.toString()
  } else {
    return add(a,b)
  }
}

function isEmail (str) {
  if (str.includes(".") == true && str.includes("@") == true) {
    return true
  } else {
    return false
  }
}

function countIf (array, fn) {
  var count = 0
  for(var i = 0; i < array.length; i++){
    if(fn(array[i])){
      count++
    }
  }
  console.log(fn())
  return count
}

function filter (array, fn) {
  var iHateThis = array.filter(function(thing){
    return fn(thing)
  })
  return iHateThis
  // function newFunc(s){

  // }
  // array.filter(newFunc())
  
}

function map (array, fn) {
  var iHateThisToo = array.map(thing =>{
    return fn(thing)
  })
  return iHateThisToo
}

function filterStringsWithCommas (str) {
console.log(str)

}

function splitStringByCommas (str) {

}

