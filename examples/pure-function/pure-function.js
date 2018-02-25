const R = require('ramda')


const add = (a, b) => a + b
console.log(add(1, 4)) // => 5
console.log(add(1, 4)) // => 5



const uppercase = str => str.toUpperCase()
console.log(uppercase('weblite-talk')) // => WEBLITE-TALK
console.log(uppercase('weblite-talk')) // => WEBLITE-TALK



const factorial = a => {
  if (a === 1) return 1
  return a * factorial(a - 1)
}
console.log(factorial(10)) // => 3628800
console.log(factorial(10)) // => 3628800



// R
console.log(R.flatten([[1, 2], [3, 5]])) // => [1, 2, 3, 5]

console.log(R.init([1, 2, 3, 4])) // => [1, 2, 3]

console.log(R.range(1, 5)) // [1, 2, 3, 4]

console.log(R.repeat('W', 10)) // => [ 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' ]

console.log(R.uniq([1, 2, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6, 6])) // => [ 1, 2, 3, 4, 5, 6 ]

console.log(R.zipObj(['a', 'b', 'c'], [1, 2, 3])) // => { a: 1, b: 2, c: 3 }
