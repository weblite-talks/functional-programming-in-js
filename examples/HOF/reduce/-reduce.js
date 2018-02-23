const R = require('ramda')


// example 1
const sum = (a, b) => a + b

const arraySum = array => {
  let accmulator = 0

  for (var i = 0; i < array.length; i++) {
    accmulator = sum(accmulator, array[i])
  }

  return accmulator
}

console.log(arraySum(R.range(1, 11)))



// example 2
const concatString = (a, b) => a + b

const arrayConcatString = array => {
  let accmulator = ''

  for (var i = 0; i < array.length; i++) {
    accmulator = concatString(accmulator, array[i])
  }

  return accmulator
}

console.log(arrayConcatString(['functional', ' ', 'programming', ' ', 'is', ' ', 'awesome']))



// reduce implementation
const reduce = (reducer, initialData, array) => {
  let accmulator = initialData

  for (var i = 0; i < array.length; i++) {
    accmulator = reducer(accmulator, array[i])
  }

  return accmulator
}

console.log(reduce(concatString, '', ['functional', ' ', 'programming', ' ', 'is', ' ', 'awesome']))
