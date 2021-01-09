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
 //convert both args to numbers, add then convert to string, return value 
 function addStrings (a, b) {
  let total = Number(a) + Number(b)
  return total.toString()
 }


 /* If typeof a = s & typeof b = s -> do addStrings(a, b)
If typeof a = s or typeof b = s -> do addStrings (a, b)
Else do add(a, b)*/
function addStringsOrNumbers (a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return addStrings(a, b)
  } else if 
     (typeof a === "string" || typeof b === "string") {
       return addStrings(a, b)
     } else {
  } return add(a, b) 
}

//If string contains '@' && '@' is not last index -> return true  

function isEmail (str) {
  //if (str.includes("@") && str.lastIndexOf(str) !== "@") {
  //  return true
  //} else {
  //  return false
  const atPosition = str.indexOf("@")  
  const dotPosition = str.lastIndexOf(".")
  return atPosition > 0 && dotPosition > atPosition
  }

//For whatever type fn is, loop through array and count all instances of that type. 
function countIf (array, fn) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
    count++   
    }
  } return count
}

//For each item in array if condition(fn) is met push the item to new array ("truthy" value)
function filter (array, fn) {
  let newArr = []
  for (let item of array) {
    if (fn(item)) {
    newArr.push(item)
    }
  }
  return newArr
}


/*Alternative solution 
function filter(array, fn) {
  let newArr = array.filter(function(item) {
    return fn(item)
  })
  return newArr 
}
*/

//for each item in an array do something (eg * 2) to each item and return a new array of adjusted items
function map(array, fn) {
  let newArr = array.map(item => {
    return fn(item)
  })
  return newArr
}


//Loop through array, and return array of strings that have commas
function filterStringsWithCommas (str) {
  return str.includes(",")
}
 

//return string separated by commas
function splitStringByCommas (str) {
  return str.split(",")
}

