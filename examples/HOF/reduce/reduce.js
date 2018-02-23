const R = require('ramda')


// example 1
const sum = (acc, item) => acc + item
const arraySum = R.reduce(sum, 0)

console.log(arraySum([47, 11, 42, 13]))
console.log(sum(sum(sum(sum(0, 47), 11), 42), 13))


// example 2
const arrayConcatString = R.reduce((acc, item) => acc + item, '')

console.log(arrayConcatString(['ali', ' ', 'asgary']))
