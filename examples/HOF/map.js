const range = require('ramda/src/range')
const map = require('ramda/src/map')



const array = range(1, 11)


const arrayMultiplyTen = map(x => x * 10, array)


console.log(arrayMultiplyTen)
