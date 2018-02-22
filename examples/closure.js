const getNumberFuncCreator = () => {
  let i = 1

  return () => {
    console.log(i)
    i++
  }
}

const addNCreator = a => (b => a + b)
const add1 = addNCreator(1)
const add2 = addNCreator(2)

// execution
const getNumber = getNumberFuncCreator()
getNumber()
getNumber()
getNumber()

console.log('\n')
console.log(add1(1))
console.log(add2(1))
console.log(addNCreator(3)(1))
