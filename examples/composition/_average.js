const dataset = [
  { type: 'a', number: 1 },
  { type: 'b', number: 3 },
  { type: 'b', number: 2 },
  { type: 'a', number: 4 },
  { type: 'b', number: 7 },
  { type: 'b', number: 4 },
  { type: 'a', number: 2 },
  { type: 'b', number: 5 },
]



// average of a type
const imperativeAverageForA = (data) => {
  let sum = 0
  let count = 0

  for (var i = 0; i < data.length; i++) {
    if (data[i].type === 'a') {
      sum += data[i].number
      count += 1
    }
  }

  return sum / count
}
console.log(imperativeAverageForA(dataset)) // => 7 / 3 = 2.33333



// average of both type
const imperativeAverageForBoth = (data) => {
  let object = {}

  for (var i = 0; i < data.length; i++) {
    if (object[data[i].type]) {
      object[data[i].type] = {
        sum: object[data[i].type].sum + data[i].number,
        count: object[data[i].type].count + 1,
      }
    }
    else {
      object[data[i].type] = { sum: data[i].number, count: 1 }
    }
  }

  for (var key in object) {
    object[key] = object[key].sum / object[key].count
  }

  return object
}
console.log(imperativeAverageForBoth(dataset)) // => { a: 2.3333333333333335, b: 4.2 }
