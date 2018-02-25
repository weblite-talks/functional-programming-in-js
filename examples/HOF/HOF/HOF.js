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




// some usefull R HOFs
// R.find
console.log(
  R.find(R.propEq('name', 'masoud'), [
    { name: 'ali' },
    { name: 'amir' },
    { name: 'mostafa' },
    { name: 'masoud' },
    { name: 'amin' },
  ]),
) // => { name: 'masoud' }




// R.where
const predicate = R.where({
  a: R.equals('foo'),
  x: R.gt(10),
  y: R.lt(20)
})
console.log(predicate({a: 'foo', x: 9, y: 21})) // => true
console.log(predicate({a: 'bar', x: 11, y: 19})) // => false
