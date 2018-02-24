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
