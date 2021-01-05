const isNumber = require('../utilities').isNumber

test('"42" is not a number datatype', () => {
  const expected = false
  const actual = isNumber('42')
  expect(actual).toBe(expected)
})

test('13 is a number', () => {
  const expected = true
  const actual = isNumber(13)
  expect(actual).toBe(expected)
})

test('hi is not a number', () => {
  const expected = false
  const actual = isNumber('hi')
  expect(actual).toBe(expected)
})

test('{} is not a number', () => {
  const expected = false
  const actual = isNumber({})
  expect(actual).toBe(expected)
})

