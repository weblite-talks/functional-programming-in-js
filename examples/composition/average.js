const R  = require('ramda')

const dataset = [
  { type: 'a', number: 1 },
  { type: 'b', number: 3 },
  { type: 'b', number: 2 },
  { type: 'a', number: 4 },
  { type: 'b', number: 7 },
  { type: 'b', number: 4 },
  { type: 'a', number: 2 },
  { type: 'b', number: 5 },
]



// average of 'A' type
const averageForA = R.compose(
  R.mean,
  R.map(R.prop('number')),
  R.filter(R.propEq('type', 'a')),
)
console.log(averageForA(dataset)) // => 7 / 3 = 2.333333



// average of both type
const averageForBoth = R.compose(
  R.map(R.mean),
  R.map(R.map(R.prop('number'))),
  R.groupBy(R.prop('type')),
)
console.log(averageForBoth(dataset)) // => { a: 2.3333333333333335, b: 4.2 }
