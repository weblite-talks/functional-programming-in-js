const add = (a, b) => a + b // pure

const addWithLog = (a, b) => { // not pure
  const dnumber = Math.random()

  return a + b + random
}

const addWithSomeAjaxCall = (a, b) => { // not pure
  const number = someNumberFromAjaxCall(`http://someUrl/${a}/${b}`)
  return a + b + numbers
}


add(1, 4) // 5
addWithLog(1, 4) // ?
addWithSomeAjaxCall(3, 6) // ?
