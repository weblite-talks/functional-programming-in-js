let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const multiplyEachItemBy2 = array => { // mutabale
  const newArray = []

  for(var i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2)
  }

  return newArray
}

console.log(arr)
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(multiplyEachItemBy2(arr))
// => [2, 4, 6, 8, 10, 12, 14, 16, 18]




const addEachItemBy4 = array => { // mutabale
  const newArray = []

  for(var i = 0; i < array.length; i++) {
    newArray.push(array[i] + 4)
  }

  return newArray
}

console.log(arr)
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(addEachItemBy4(arr))
// => [5, 6, 7, 8, 9, 10, 11, 12, 13]
