const R = require('ramda')

// R.compose
// R.map
// R.toUpper
// R.toLower
// R.join (' ', ['a', 2, 3.4]);   //=> 'a 2 3.4'
// R.split ('/', '/usr/local/bin/node') // => ['usr', 'local', 'bin', 'node']
// R.replace ('foo', 'bar', 'foo foo foo')s //=> 'bar foo foo'


const firstCharMap = toWhat => R.compose(
  R.join(''),
  R.adjust(toWhat, 0),
)

const actionHandlerNameFromType = R.compose(
  firstCharMap(R.toLower),
  R.join(''),
  R.map(firstCharMap(R.toUpper)),
  R.map(R.toLower),
  R.split('_'),
  R.replace('WAPP_COMMUNICATE_', ''),
)


console.log(firstCharMap(R.toLower)('SALAM')) // => sLam
console.log(actionHandlerNameFromType('WAPP_COMMUNICATE_CORE_LOAD_DATA')) // => coreLoadData
