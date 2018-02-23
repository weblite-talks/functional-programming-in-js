const R = require('ramda')


// example 1
const arraySum = R.reduce((acc, item) => acc + item, 0)

console.log(arraySum(R.range(1, 11)))


// example 2
const arrayConcatString = R.reduce((acc, item) => acc + item, '')

console.log(arrayConcatString(['ali', ' ', 'asgary']))
