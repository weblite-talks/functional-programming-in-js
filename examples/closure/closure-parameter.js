const addNCreator = a => b => a + b

const add1 = addNCreator(1)
const add2 = addNCreator(2)
const add3 = addNCreator(3)

console.log(add1(1)) // => 2
console.log(add2(1)) // => 3
console.log(add3(1)) // => 4
