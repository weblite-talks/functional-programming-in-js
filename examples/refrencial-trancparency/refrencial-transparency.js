const R = require('ramda')


const add = (a, b) => a + b // pure

const addWithLog = (a, b) => { // not pure
  const random = Math.random()

  return a + b + random
}

const addWithSomeAjaxCall = (a, b) => { // not pure
  const number = someNumberFromAjaxCall(`http://someUrl/${a}/${b}`)
  return a + b + numbers
}


add(1, 4) // 5
addWithLog(1, 4) // ?
addWithSomeAjaxCall(3, 6) // ?




// R
console.log(R.remove(1, 3, [1, 2, 3, 4])) // => [ 1 ]

console.log(R.reverse([1, 2, 3, 4])) // => [ 4, 3, 2, 1 ]
