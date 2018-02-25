class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }

  fullname() { // impure
    return `${this.firstname} ${this.lastname}`
  }

  captalizeFirstname() { // impure
    return this.firstname.charAt(0).toUpperCase() + this.firstname.slice(1)
  }

  captalizeLastname() { // impure
    return this.lastname.charAt(0).toUpperCase() + this.lastname.slice(1)
  }

  changePerson(firstname, lastname) { // impure
    this.firstname = firstname
    this.lastname = lastname
  }
}


const ali = new Person('ali', 'asgary')
console.log(ali.fullname()) // => ali asgary
console.log(ali.captalizeFirstname()) // => Ali
console.log(ali.captalizeLastname()) // => Asgary
ali.changePerson('amirhossein', 'shafie')
console.log(ali.fullname()) // => amirhossein shafie


// object oriented programming heavily using muatable state in functions(methods)
