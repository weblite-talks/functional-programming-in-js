const R = require('ramda')


// add
const add1 = R.add(1)
console.log(add1(4)) // => 5
console.log(R.add(3, 5)) // => 8




// contains
const have3 = R.contains(3)
console.log(have3([1, 2, 3])) // => true
console.log(have3([1, 2, 4, 5])) // => false
console.log(R.contains(4, [1, 2, 4, 5])) // => true




// path
const nameProp = R.prop('name')
console.log(nameProp({ name: 'ali', lastname: 'asgary' })) // => ali




// has
const hasName = R.has('name')
console.log(hasName({ name: 'ali' })) // => true
console.log(hasName({ lastname: 'asgary' })) // => false
