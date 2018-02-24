const getNumberFunctionCreator = () => {
  var i = 1

  return () => i++
}

const getNumber1 = getNumberFunctionCreator()
const getNumber2 = getNumberFunctionCreator()


getNumber1()
getNumber1()
console.log(getNumber1()) // => 3

getNumber2()
getNumber2()
getNumber2()
getNumber2()
console.log(getNumber2()) // => 5
