const R = require('ramda')

// no memoization
const fibonacci = a => {
  if (a === 1) return 0
  if (a === 2) return 1
  return (fibonacci(a - 1) + fibonacci(a - 2))
}

console.time('fib(45)')
console.log(fibonacci(45))
console.timeEnd('fib(45)')
// how many time do you think fib is called?




// memoization
const fibonacciWithMemoize = R.memoize((a) => {
  if (a === 1) return 0
  if (a === 2) return 1
  return fibonacciWithMemoize(a - 1) + fibonacciWithMemoize(a - 2)
})

console.time('fibonacciWithMemoize(45)')
console.log(fibonacciWithMemoize(45))
console.timeEnd('fibonacciWithMemoize(45)')
