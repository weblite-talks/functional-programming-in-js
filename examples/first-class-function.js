const multiply4 = a => a * 4

const arrayOfFuncs = [a => a * 2, a => a * 3, multiply4]


console.log(arrayOfFuncs.map(func => func(4)))
