class Calculator {
  constructor(x) {
    this.x = x
  }
  logX() {
    console.log(this.x) // side effect
    return this
  }
  add(num) {
    this.x = this.x + num // side effect
    return this
  }
  substract(num) {
    this.x = this.x - num // side effect
    return this
  }
  multiply(num) {
    this.x = this.x * num // side effect
    return this
  }
  divide(num) {
    this.x = this.x / num // side effect
    return this
  }
  multiplyByRandom() {
    this.x = this.x * Math.random() // 2 side effect
    return this
  }
}

const newX = new Calculator(0)
  .add(2)
  .multiply(40)
  .substract(16)
  .divide(8)
  .multiplyByRandom()
  .logX() // => ?
