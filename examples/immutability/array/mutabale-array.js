let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const multiplyEachItemBy2 = array => { // mutabale
  for(var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2
  }
}

multiplyEachItemBy2(arr)
console.log(arr)
// => [2, 4, 6, 8, 10, 12, 14, 16, 18]





const addEachItemBy4 = array => { // mutabale
  for(var i = 0; i < array.length; i++) {
    array[i] = array[i] + 4
  }
}

addEachItemBy4(arr)
console.log(arr)
// => [6, 8, 10, 12, 14, 16, 18, 20, 22]
