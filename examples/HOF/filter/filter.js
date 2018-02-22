const R = require('ramda')


// example 1
const filterOutUserWithoutUsername = R.filter(R.prop('username'))

console.log(filterOutUserWithoutUsername([
  { username: 'mostafa' },
  { username: '' },
  { username: 'masoud' },
]))



// example 2
const filterOutWordWIthoutWeblite = R.filter(word => word.match(/weblite/))

console.log(filterOutWordWIthoutWeblite(['weblite', 'website', 'weblite-talks']))
