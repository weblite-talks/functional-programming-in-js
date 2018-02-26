const R = require('ramda')


// R.compose
// R.map
// R.filter



const naturalSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




console.log(R.compose(
  R.map(R.multiply(2)),
  R.filter(number => number % 2 === 0),
)(naturalSeries))// => [4, 8, 12, 16, 20]




console.log(R.compose(
  R.map(number => (number * 2) + 1),
  R.filter(number => number % 2 !== 0),
)(naturalSeries))// => [3, 7, 11, 15, 19]




console.log(R.compose(
  R.map(number => (number * 3) + 1),
  R.filter(number => number % 3 === 0),
)(naturalSeries)) // => [10, 19, 28]
