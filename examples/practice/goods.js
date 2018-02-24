const items = [
  {
    quantity: 1,
    price: 4.99,
    name: 'Some toy',
    shipping: false
  },
  {
    quantity: 3,
    price: 8.99,
    name: 'Some fancier toy',
    shipping: false
  },
  {
    quantity: 1,
    price: 40.00,
    name: 'Really fancy toy',
    shipping: false
  },
  {
    price: 4.99,
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

const totalToysPrice = items
  .filter(isShipping)
  .map(getItemPrice)
  .reduce(getItemsTotal, 0)
