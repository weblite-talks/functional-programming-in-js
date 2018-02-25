const R = require('ramda')

// without memoization
const factorial = a => {
  console.log('i am running')
  if (a === 1) return 1
  return a * factorial(a - 1)
}

console.log(factorial(10))
console.log(factorial(10))




// with memoization
const getMemoizedFactorial = () => {
  let cache = {}

  return a => {
    if (cache[a]) return cache[a]

    cache[a] = factorial(a)
    return cache[a]
  }
}
const memoizedFactorial = getMemoizedFactorial()

console.log(memoizedFactorial(10))
console.log(memoizedFactorial(10))




// with memoization
const rMemoizedFactorial = R.memoize((a) => {
  console.log('i am running')
  if (a === 1) return 1
  return a * rMemoizedFactorial(a - 1)
})

console.log(rMemoizedFactorial(10))
console.log(rMemoizedFactorial(10))
console.log(rMemoizedFactorial(10))








// cannot memoize impure functions
const randomAdd = a => a + Math.random()
console.log(randomAdd(.5))
console.log(randomAdd(.5))


const memoizeRandomAdd = R.memoize(a => a + Math.random()) // wrong
console.log(memoizeRandomAdd(.5))
console.log(memoizeRandomAdd(.5))
