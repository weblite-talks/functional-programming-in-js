var variable = 1

const plusVariable = x => x + variable


console.log(plusVariable(1)) // => 2

variable = 11

console.log(plusVariable(1)) // => 12
