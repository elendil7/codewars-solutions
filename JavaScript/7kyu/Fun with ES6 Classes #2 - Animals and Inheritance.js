class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status)
    this.name = name
    this.age = age
    this.status = status
    this.legs = 0
    this.species = "shark"
  }
  
  introduce(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status)
    this.name = name
    this.age = age
    this.status = status
    this.legs = 4
    this.species = "cat"
  }
  
  introduce(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status, master)
    this.name = name
    this.age = age
    this.status = status
    this.master = master
    this.legs = 4
    this.species = "dog"
  }
  
  introduce(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
  
  greetMaster(){
    return `Hello ${this.master}`
  }
}
