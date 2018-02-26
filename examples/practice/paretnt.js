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


const beautifulObjectLog = object => console.log(JSON.stringify(object, null, 2))

const familyTree = (family, parent) => R.compose(
  R.reduce((tree, member) => R.assoc(member.name, familyTree(family, member.name), tree), {}),
  R.filter(member => member.parent === parent),
)(family)

beautifulObjectLog(familyTree(mohammadiFamily, null))
// {
//   'kazem mohammadi': {
//
//     'hossein mohammadi': {
//       'saeed mohammadi': {},
//       'sarah mohammadi': {},
//       'siamak mohammadi': {},
//     },
//
//     'hasan mohammadi': {
//       'ali mohammadi': {},
//       'zahra mohammadi': {},
//     },
//   }
// }
