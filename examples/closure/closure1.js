const getNumberFunction = () => {
  var i = 1

  return () => i++
}

const getNumber1 = getNumberFunction()
const getNumber2 = getNumberFunction()


getNumber1()
getNumber1()
console.log(getNumber1()) // => 3

getNumber2()
getNumber2()
getNumber2()
getNumber2()
console.log(getNumber2()) // => 5
