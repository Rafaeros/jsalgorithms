// Class

class Person {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`My name is ${this.name}`)
  }
}

const person1 = new Person("Rafael")
person1.speak()

// Factory function with arrow function

const createPerson = name => {
  return {
    speak: () => console.log(`My name is ${name}`)
  }
}

person2 = createPerson("Maxine")
person2.speak()