// constant and variable
const greeting = 'HELLO'
const multiply3 = a => a * 3


// array
const arrayOfNumbers = [1, 2, 3, 4]
const arrayOfFuncs = [a => a * 2, a => a * 3, multiply3]


// object
const objectOfNames = {
  'ali': 23,
  'amirhossein': 24,
  'mostafa': 24,
  'masoud': 22,
  'amin': 20
}
const objectOfFunc = {
  sum: (a, b) => a + b,
  multiply: (a, b) => a * b,
}


// function
const sum = (a, b) => a + b
const functionsAsArgs = (func, value) => func(value)
const functionAsReturnValue = () => () => 'Hi!!!'
const returnFunction = functionAsReturnValue()


// executions
console.log(multiply3(1))
console.log(arrayOfFuncs[0](2))
console.log(mapOfFunc.sum(2, 3))
console.log(functionsAsArgs(multiply3, 2))
console.log(returnFunction())
