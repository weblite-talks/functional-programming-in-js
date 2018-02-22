const factorial = a => {
  if (a === 1) return 1
  return a * factorial(a - 1)
}

const fibonacci = a => {
  if (a === 1) return 0
  if (a === 2) return 1
  return (fibonacci(a - 1) + fibonacci(a - 2))
}

const fibonacci2 = a => {
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


console.log(fibonacci(5))
console.log(fibonacci2(5))
