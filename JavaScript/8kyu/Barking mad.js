class Dog {
  constructor(breed){
    this.breed = breed;  
  }  
  bark(){
    if(this.breed == `Great Dane`){
      return `Woof`
    }else if(this.breed == `Beagle`){
      return `Woof`    
    }
  }
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
