class Person {
  constructor(first, last, age, gender){
    this.firstName = first || `John`
    this.lastName = last || `Doe`
    this.age = age || 0
    this.gender = gender || `Male`
  }
  
  sayFullName(){
    return `${this.firstName} ${this.lastName}`
  }
  
  static greetExtraTerrestrials(name){
    return `Welcome to Planet Earth ${name}`
  }
}
