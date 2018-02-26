const R = require('ramda')


// R.compose
// R.map
// R.toUpper
// R.head ([1, 2, 3]) // => 1
// R.head ('weblite') // => 'w'
// R.join (' ', ['a', 2, 3.4]);   // => 'a 2 3.4'
// R.split ('/', '/usr/local/bin/node') // => ['usr', 'local', 'bin', 'node']



const abbr = R.compose(
  -,
  -,
  -,
  -,
)


console.log(abbr('functional programming')) // => FP
