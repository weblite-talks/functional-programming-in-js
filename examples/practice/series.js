const R = require('ramda')


// R.compose
// R.map
// R.filter



const series1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(R.compose(
  R.map(number => (number * 2) + 1),
  R.filter(number => number % 2 !== 0),
)(series1))// => [3, 7, 11, 15, 19]



console.log(R.compose(
  R.map(number => (number * 3) + 1),
  R.filter(number => number % 3 === 0),
)(series1)) // => [10, 19, 28]
