const map = require('ramda/src/map')
const filter = require('ramda/src/filter')


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const add1 = a => a + 1
const multiply3 = a => a * 3
const isOdd = a => (a % 2) === 0

const arrayPlus1 = map(add1, array)
const arrayMultiply3 = map(multiply3, array)
const arrayOdd = filter(isOdd, array)
const arrayOddPlus1 = map(add1, filter(isOdd, array))

console.log(array)
console.log(arrayPlus1)
console.log(arrayMultiply3)
console.log(arrayOdd)
console.log(arrayOddPlus1)