class Cuboid {
  constructor(length, width, height){
    this.length = length
    this.width = width
    this.height = height
  }
  
  get surfaceArea(){
    return (2*this.length*this.width) + (2*this.length*this.height) + (2*this.height*this.width)
  }
  
  get volume(){
    return this.length*this.width*this.height
  }
}
class Cube extends Cuboid {
  constructor(length){
    super()
    this.length = length
    this.width = length
    this.height = length
  }
}
