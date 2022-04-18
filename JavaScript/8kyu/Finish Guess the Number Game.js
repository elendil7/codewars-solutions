class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    console.log(n, this.number, this.lives)
    if(n > this.number || this.lives == 0 || n < 1){
      throw new Error()
    }else if(n === this.number){
      return true
    }else{
      this.lives --
      return false
    }
  }
}
