const R = require('ramda')

// R.assoc ('firstname', 'ali', { lastname: 'asgary' }) //=> { firstname: 'ali', lastname: 'asgary' }
// R.filter
// R.reduce
// R.compose
// recursion


const mohammadiFamily = [
  { name: 'kazem mohammadi', parent: null },

  { name: 'hossein mohammadi', parent: 'kazem mohammadi' },
  { name: 'hasan mohammadi', parent: 'kazem mohammadi' },

  { name: 'saeed mohammadi', parent: 'hossein mohammadi' },
  { name: 'sarah mohammadi', parent: 'hossein mohammadi' },
  { name: 'siamak mohammadi', parent: 'hossein mohammadi' },

  { name: 'ali mohammadi', parent: 'hasan mohammadi' },
  { name: 'zahra mohammadi', parent: 'hasan mohammadi' },
]


const beautifulObjectLog = object =>

const familyTree = (family, parent) => R.compose(
  -
  -
)(family)

console.log(JSON.stringify(familyTree(mohammadiFamily, null), null, 2))
// {
//   'kazem mohammadi': {
//
//     'hossein mohammadi': {
//       'saeed mohammadi': { },
//       'sarah mohammadi': { },
//       'siamak mohammadi': { },
//     },
//
//     'hasan mohammadi': {
//       'ali mohammadi': { },
//       'zahra mohammadi': { },
//     },
//   }
// }
