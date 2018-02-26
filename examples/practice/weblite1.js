const R = require('ramda')

// R.join
// R.toUpper
// R.toLower
// R.map
// R.split
// R.replace


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
