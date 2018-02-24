const R = require('ramda')


// example 1
const arrayMultiplyTenEachItem = R.map(x => x * 10)

console.log(arrayMultiplyTenEachItem(R.range(1, 11)))



// example 2
const arrayUppercaseEachItem = R.map(R.toUpper)

console.log(arrayUppercaseEachItem(['weblite', 'talks']))



// example 3
const fruits = [
  { name: 'apple', number: 2 },
  { name: 'orange', number: 10 },
  { name: 'tomato', number: 5 },
  { name: 'potato', number: 1 },
]

const fruitsString = R.map(fruit => `i have ${fruit.number} ${fruit.name}`, fruits)

console.log(fruitsString)
// =>  [ 'i have 2 apple',
//       'i have 10 orange',
//       'i have 5 tomato',
//       'i have 1 potato' ]
