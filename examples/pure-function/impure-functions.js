//
const multiplyRandomNumber = a => a * Math.random()  // side effect
console.log(multiplyRandomNumber(10)) // => 10 * ?
console.log(multiplyRandomNumber(10)) // => 10 * ?




// Date
const now = () => Date.now()  // side effect
console.log(now()) // => ?
console.log(now()) // => ?




// mutable state
var x = 1
const multiplyX = a => x * a  // side effect
console.log(10) // => 10
x = 2
console.log(10) // => 20




// io
var logAndMultipy = (a, b) => {
  console.log(`${a} * ${b}: ${a * b}`) // side effect
  return a * b
}
logAndMultipy(10, 20) // => 10 * 20: 200
