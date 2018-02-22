const R = require('ramda')


// example 1
const hasUsername = user => user.username

const filterOutUserWithoutUsername = array => {
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    if (hasUsername(array[i])) newArray.push(array[i])
  }

  return newArray
}

console.log(filterOutUserWithoutUsername([
  { username: 'ali' },
  { username: '' },
  { username: 'amir' },
]))



// example 2
const hasWeblite = word => word.match(/weblite/)

const filterOutWordWIthoutWeblite = array => {
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    if (hasWeblite(array[i])) newArray.push(array[i])
  }

  return newArray
}

console.log(filterOutWordWIthoutWeblite(['weblite', 'website', 'weblite-talks']))



// filter implementation
const filter = (predicate, array) => {
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) newArray.push(array[i])
  }

  return newArray
}

console.log(filter(x => x < 5, R.range(1, 11)))
