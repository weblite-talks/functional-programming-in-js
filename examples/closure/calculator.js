const calculatorFactory = () => {
  const add = (a, b) => a + b // private
  const subtract = (a, b) => a - b // private
  const multiply = (a, b) => a * b // private
  const divide = (a, b) => a / b // private

  return (operator, a, b) => { // public
    switch (operator) {
      case 'add':
        return add(a, b)
        break;
      case 'subtract':
        return subtract(a, b)
        break;
      case 'multiply':
        return multiply(a, b)
        break;
      case 'divide':
        return divide(a, b)
        break;
      default:
        return 'not supported'
    }
  }
}

const calculator = calculatorFactory()

console.log(calculator('add', 1, 0)) // => 1
console.log(calculator('subtract', 3, 1)) // => 2
console.log(calculator('multiply', 1, 3)) // => 3
console.log(calculator('divide', 8, 2)) // => 4
