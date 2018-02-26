// normal function
function triple(x) {
  return x * 3
}

console.log(triple(2)) // => 6




// constant and variable
const greeting = 'HELLO'
const double = function(x) {
  return x * 2
}
const plus3 = a => a + 3
const double1 = double

console.log(double(2)) // => 4
console.log(double1(5)) // => 10
console.log(plus3(1)) // => 4




// array
const arrayOfNumbers = [1, 2, 3, 4]
const arrayOfFuncs = [a => a * 2, a => a * 3, triple]

console.log(arrayOfFuncs[0](2)) // => 4




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

console.log(objectOfFunc.sum(2, 3)) // => 5




// function
const sum = (a, b) => a + b
const functionsAsArgs = (func, value) => func(value)
const functionAsReturnValue = () => () => 'Hi!!!'
const returnFunction = functionAsReturnValue()

console.log(functionsAsArgs(triple, 2))
console.log(returnFunction())
