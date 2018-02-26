const R = require('ramda')
const pMap = require('../../utility/parallel-map')



function fibonacci(a) {
  if (a === 1) return 0
  if (a === 2) return 1
  return (fibonacci(a - 1) + fibonacci(a - 2))
}

const arr = [
  42, 37, 37, 42,
  38, 38, 38, 38,
  37, 42, 42, 37,
  38, 38, 38, 38,
  37, 42, 42, 37,
  38, 38, 38, 38,
  42, 37, 37, 42,
  39, 39, 39, 39,
]


// console.time('fib')
// pMap(fibonacci, arr)
//   .then(console.log)
//   .then(() => console.timeEnd('fib'))

// console.time('fib')
// const fibArr = R.map(fibonacci, arr)
// console.log(fibArr)
// console.timeEnd('fib')
