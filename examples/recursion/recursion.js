// example 1
const factorial = a => {
  if (a === 1) return 1
  return a * factorial(a - 1)
}




// example 2
const fibonacci = a => {
  if (a === 1) return 0
  if (a === 2) return 1
  return (fibonacci(a - 1) + fibonacci(a - 2))
}

console.log(fibonacci(5))
