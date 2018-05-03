const calFac = (initialValue) => {
  let number = initialValue || 0

  const add = (a) => {
    number += a
    return number
  } // private
  const subtract = (a) => {
    number -= a
    return number
  } // private
  const multiply = (a) => {
    number *= a
    return number
  } // private
  const divide = (a, b) => {
    number /= a
    return number
  } // private

  return (operator, a) => { // public
    switch (operator) {
      case 'add':
        return add(a)
        break;
      case 'subtract':
        return subtract(a)
        break;
      case 'multiply':
        return multiply(a)
        break;
      case 'divide':
        return divide(a)
        break;
      case 'get':
        return number
        break;
      default:
        return 'not supported'
    }
  }
}
