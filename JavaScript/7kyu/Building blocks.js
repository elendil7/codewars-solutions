class Block{

  constructor(data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }
  
  getWidth(){
    return this.width
  }
  
  getLength(){
    return this.length
  }
  
  getHeight(){
    return this.height
  }
  
  getVolume(){
    return this.width * this.length * this.height
  }
  
  getSurfaceArea(){
    // 2lw+2lh+2hw
    const length = this.length
    const width = this.width
    const height = this.height
    return 2*length*width + 2*length*height + 2*height*width
  }
  
}
