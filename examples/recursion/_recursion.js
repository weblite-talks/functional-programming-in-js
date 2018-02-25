// example 1
const factorial = a => {
  if (a === 1) return 1
  let temp = 1

  for(var i = 1; i <= a; i++) {
    temp = i * temp
  }

  return temp
}

console.log(factorial(3)) // => 6



// example 2
const fibonacci = a => {
  let a0 = 0
  let a1 = 1
  let temp

  if (a === 0 || a === 1) return a

  for(let i = 1; i <= a - 2; i++) {
    temp = a0
    a0 = a1
    a1 = a0 + temp
  }

  return a1
}

console.log(fibonacci(5)) // => 3
