const add = (a, b) => a + b


const add1 = b => add(1, b)
const add2 = b => add(2, b)
const add3 = b => add(3, b)
const add4 = b => add(4, b)


console.log(add1(2)) // => 3
console.log(add2(2)) // => 4
console.log(add3(2)) // => 5
console.log(add4(2)) // => 6
