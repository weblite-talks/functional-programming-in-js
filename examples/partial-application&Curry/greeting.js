const R = require('ramda')


// DRY
const hello = name => {
  if (!name) return 'hello!'
  return `hello ${name}`
}

const hey = name => {
  if (!name) return 'hey!'
  return `hey ${name}`
}

const ciao = ciao => {
  if (!name) return 'ciao!'
  return `ciao ${name}`
}

const hola = hola => {
  if (!name) return 'halo!'
  return `hola ${name}`
}




// partial applications
const greeting = (first, second) => {
  if (!second) return `${first}!`
  return `${first} ${second}`
}
const hello1 = name => greeting('hello', name)
const hey1 = name => greeting('hey', name)
const ciao1 = name => greeting('ciao', name)
const hola1 = name => greeting('holas', name)

console.log(hello1('mostafa'))
console.log(hey1('amir'))
console.log(ciao1('ali'))
console.log(hola1('masoud'))




// curry
const curryGreeting = first => second => {
  if (!second) return `${first}!`
  return `${first} ${second}`
}
const hello2 = curryGreeting('hello')
const hey2 = curryGreeting('hey')
const ciao2 = curryGreeting('ciao')
const hola2 = curryGreeting('holas')

console.log(hello2('mostafa'))
console.log(hey2('amir'))
console.log(ciao2('ali'))
console.log(hola2('masoud'))
// curryGreeting('salam', 'amin') wrongs




// R.curry
const RCurryGreeting = R.curry(greeting)
const hello3 = RCurryGreeting('hello')
const hey3 = RCurryGreeting('hey')
const ciao3 = RCurryGreeting('ciao')
const hola3 = RCurryGreeting('holas')

console.log(hello3('mostafa'))
console.log(hey3('amir'))
console.log(ciao3('ali'))
console.log(hola3('masoud'))
// RCurryGreeting('salam', 'amin') right
