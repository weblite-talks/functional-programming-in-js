const R = require('ramda')


// a(x) = 4 - x
// b(x) = 5 * x

// f(x) = a(b(x))
// f(x) = (5 * (4 - x))


const a = R.multiply(5)
const b = R.subtract(4)

const f = x => a(b(x))

console.log(f(1))





// f(x) = a(b(x)) = (a . b)(x)
const f1 = R.compose(a, b)
console.log(f1(1))
