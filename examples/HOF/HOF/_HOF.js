const uppercase = string => {
  if (string === null) throw Error('must not be null')
  if (string === undefined) throw Error('must not be undefined')
  if (typeof string !== 'string') throw Error('must be string')

  return string.toUpperCase()
}

const lowercase = string => {
  if (string === null) throw Error('must not be null')
  if (string === undefined) throw Error('must not be undefined')
  if (typeof string !== 'string') throw Error('must be string')

  return string.toLowerCase()
}

const firstLetter = string => {
  if (string === null) throw Error('must not be null')
  if (string === undefined) throw Error('must not be undefined')
  if (typeof string !== 'string') throw Error('must be string')

  return string[0]
}



console.log(uppercase('mostafa'))
console.log(lowercase('mostafa'))
console.log(firstLetter('mostafa'))

console.log(uppercase(1))
