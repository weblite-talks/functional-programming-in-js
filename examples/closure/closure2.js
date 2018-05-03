const numberFunction = () => {
  var i = 1

  return {
    changeI: (value) => { i = value },
    increment: () => i++,
    decrement: () => i--,
    get: () => i,
  }
}
