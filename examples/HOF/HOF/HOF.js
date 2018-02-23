const R = require('ramda')


const stringMap = func => string => {
  if (string === null) throw Error('must not be null')
  if (string === undefined) throw Error('must not be undefined')
  if (typeof string !== 'string') throw Error('must be string')

  return func(string)
}

const uppercase = stringMap(R.toUpper)
const lowercase = stringMap(R.toLower)
const firstLetter = stringMap(R.head)



console.log(uppercase('mostafa'))
console.log(lowercase('mostafa'))
console.log(firstLetter('mostafa'))

console.log(uppercase(1))
