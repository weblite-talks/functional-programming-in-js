const R = require('ramda')


// example 1
const sum = (acc, item) => acc + item
const arraySum = R.reduce(sum, 0)

console.log(arraySum(R.range(1, 4)))
console.log(sum(sum(sum(0, 1), 2), 3))


// example 2
const arrayConcatString = R.reduce((acc, item) => acc + item, '')

console.log(arrayConcatString(['ali', ' ', 'asgary']))
