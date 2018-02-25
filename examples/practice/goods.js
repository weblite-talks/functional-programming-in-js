const R = require('ramda')

// R.compose
// R.map
// R.filter
// R.reduce
// R.propEq

const items = [
  { quantity: 10,  price: 4,   name: 'potato',  type: 'fruit' },
  { quantity: 15,  price: 4,   name: 'milk',    type: 'dairy' },
  { quantity: 30,  price: 3,   name: 'tomato',  type: 'fruit' },
  { quantity: 5,   price: 10,  name: 'mango',   type: 'fruit' },
  { quantity: 25,  price: 7,   name: 'yogurt',  type: 'dairy' },
  { quantity: 10,  price: 6,   name: 'apple',   type: 'fruit' },
  { quantity: 20,  price: 5,   name: 'orange',  type: 'fruit' },
]

const calculateTotalPrice = R.compose(
  R.reduce((total, current) => total + current, 0),
  R.map(item => item.quantity * item.price),
  R.filter(R.propEq('type', 'fruit')),
)

console.log(calculateTotalPrice(items)) // => 340
