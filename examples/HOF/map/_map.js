// example 1
const multiplyTen = number => number * 10

const arrayMultiplyTenEachItem = array => {
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    newArray.push(multiplyTen(array[i]))
  }

  return newArray
}

console.log(arrayMultiplyTenEachItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))




// example 2
const uppercase = string => string.toUpperCase()

const arrayUppercaseEachItem = array => {
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    newArray.push(uppercase(array[i]))
  }

  return newArray
}

console.log(arrayUppercaseEachItem(['a', 'b', 'c', 'd']))




// map implementation
const map = (func, array) => {
  let newArray = []

  for (var i = 0; i < array.length; i++) {
    newArray.push(func(array[i]))
  }

  return newArray
}

console.log(map(uppercase, ['ali', 'amir', 'mostafa', 'masoud', 'amin']))
