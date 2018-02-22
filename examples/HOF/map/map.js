const R = require('ramda')


// example 1
const arrayMultiplyTenEachItem = R.map(x => x * 10)

console.log(arrayMultiplyTenEachItem(R.range(1, 11)))


// example 2
const arrayUppercaseEachItem = R.map(R.toUpper)

console.log(arrayUppercaseEachItem(['weblite', 'talks']))
