const R = require('ramda')

const items = [
  {
    quantity: 1,
    price: 4,
    name: 'Some toy',
    shipping: false
  },
  {
    quantity: 3,
    price: 8,
    name: 'Some fancier toy',
    shipping: false
  },
  {
    quantity: 1,
    price: 40,
    name: 'Really fancy toy',
    shipping: false
  },
  {
    price: 5,
    name: 'Shipping',
    shipping: true
  }
]

function isShipping (item) {
  return !item.shipping
}

function getItemPrice (item) {
  return item.quantity * item.price
}

function getItemsTotal (total, current) {
  return total + current
}

const totalPrice = R.compose(
  R.reduce(getItemsTotal, 0),
  R.map(getItemPrice),
  R.filter(isShipping),
)(items)

console.log(totalPrice)
