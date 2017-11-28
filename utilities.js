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
  return typeof thing === 'number'
}

function toNumber (str) {
  return Number(str)
}

function isStringNumber (str) {
  const num = toNumber(str)
  const isNum = typeof num === 'number'
  const isNotNaN = !isNaN(num)
  return isNum && isNotNaN
}

function add (a, b) {
  return a + b
}

function addStrings (a, b) {
  const aNum = toNumber(a)
  const bNum = toNumber(b)
  return String(aNum + bNum)
}

function addStringsOrNumbers (a, b) {
  const incomingString = typeof a === 'string' || typeof b === 'string'
  if (incomingString) return addStrings(a, b)
  return add(a, b)
}

function isEmail (str) {
  const atPosition = str.indexOf('@')
  const dotPosition = str.lastIndexOf('.')
  return atPosition > 0 && dotPosition > atPosition
}

function countIf (array, fn) {
  let count = 0
  for (let item of array) {
    if (fn(item)) count++
  }
  return count
}

function filter (array, fn) {
  const result = []
  for (let item of array) {
    if (fn(item)) result.push(item)
  }
  return result
}

function map (array, fn) {
  const result = []
  for (let item of array) {
    result.push(fn(item))
  }
  return result
}

function filterStringsWithCommas (str) {
  return str.indexOf(',') > 0
}

function splitStringByCommas (str) {
  return str.split(',')
}

