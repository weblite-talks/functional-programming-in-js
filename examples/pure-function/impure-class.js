class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }

  fullname() { // impure
    return `${this.firstname} ${this.lastname}`
  }

  changePerson(firstname, lastname) { // impure
    this.firstname = firstname
    this.lastname = lastname
  }
}

const ali = new Person('ali', 'asgary')
console.log(ali.fullname()) // => ali asgary
ali.changePerson('amirhossein', 'shafie')
console.log(ali.fullname()) // => amirhossein shafie
