const R = require('ramda')

// R.reduce
// R.repeat
// R.head
// R.last


const fibSeq = nth => R.compose(
  list => nth === 1 ? R.head(list) : R.last(list),
  n => R.reduce(numbers => ([numbers[1], numbers[0] + numbers[1]]), [0, 1], R.repeat(null, n)),
  n => (n >= 2) ? n - 2 : 0,
)(nth)



console.log(fibSeq(5)) // => 3
// 0 1 1 2 3 5 8 ...
