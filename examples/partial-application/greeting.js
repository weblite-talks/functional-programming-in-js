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
  if (!second) return '${first}!'
  return `${first} ${second}`
}
const hello = name => greeting('hello')
const hey = name => greeting('hey')
const ciao = name => greeting('ciao')
const holas = name => greeting('holas')
