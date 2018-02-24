const R = require('ramda')

const items = [
  { quantity: 10,  price: 4,   name: 'potato',  type: 'fruit' },
  { quantity: 15,  price: 4,   name: 'milk',    type: 'dairy' },
  { quantity: 30,  price: 3,   name: 'tomato',  type: 'fruit' },
  { quantity: 5,   price: 10,  name: 'mango',   type: 'fruit' },
  { quantity: 25,  price: 7,   name: 'yogurt',  type: 'dairy' },
  { quantity: 10,  price: 6,   name: 'apple',   type: 'fruit' },
  { quantity: 20,  price: 5,   name: 'orange',  type: 'fruit' },
]

const print = total => `total price is: ${total}$`
const isShipping = item => !item.shipping
const getItemPrice = item => item.quantity * item.price
const getItemsTotal = (total, current) => total + current

const totalPrice = R.compose(
  print,
  R.reduce(getItemsTotal, 0),
  R.map(getItemPrice),
  R.filter(isShipping),
)(items)

console.log(totalPrice) // => total price is: 575$
