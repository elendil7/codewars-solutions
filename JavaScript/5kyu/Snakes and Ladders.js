class SnakesLadders {
  constructor(){
    this.player1pos = 0
    this.player2pos = 0
    this.whosTurn = `p1`
    this.goodSquares = {
      "2": "38",
      "7": "14",
      "8": "31",
      "15": "26",
      "21": "42",
      "28": "84",
      "36": "44",
      "51": "67",
      "71": "91",
      "78": "98",
      "87": "94",
    }
    this.badSquares = {
      "16": "6",
      "46": "25",
      "49": "11",
      "62": "19",
      "64": "60",
      "74": "53",
      "89": "68",
      "92": "88",
      "95": "75",
      "99": "80"
    }
    this.isGameOver = `no`
  }
}

SnakesLadders.prototype.play = function(die1, die2) {
  // if game is over, return Game over!
  if(this.isGameOver == `yes`) return `Game over!`
  
  // get sum of dies
  let sum = die1 + die2
  
  // if it is player 1's turn
  if(this.whosTurn == `p1`){
    
    // increment player position by sum
    this.player1pos += sum
    
    // check if player square exceeds max (100). If so, "bounce" back
    if(this.player1pos > 100){
      this.player1pos = 100 + (100 - this.player1pos)
    }
    
    // check for goodSquares (ladders), add to sum
    for(let key in this.goodSquares){
      // if key equals to player position (player hits bottom of ladder)
      if(key == this.player1pos){
        // set player position to the key's corresponding value (higher than before, break
        this.player1pos = +this.goodSquares[key]
        break
      }
    }

    // check for badSquares (snakes), add to sum
    for(let key in this.badSquares){
      // if key equals to player position (player hits snake's head)
      if(key == this.player1pos){
        // set player position to the key's corresponding value (lower than before), break
        this.player1pos = +this.badSquares[key]
        break
      }
    }
    
  // if it is player 2's turn
  }else{

    this.player2pos += sum
    
    if(this.player2pos > 100){
      this.player2pos = 100 + (100 - this.player2pos)
    }
    
    for(let key in this.goodSquares){
      if(key == this.player2pos){
        this.player2pos = +this.goodSquares[key]
        break
      }
    }

    for(let key in this.badSquares){
      if(key == this.player2pos){
        this.player2pos = +this.badSquares[key]
        break
      }
    }
    
  }

  
  // return the position of the player
  if(this.whosTurn == `p1`){
    // check if player won
    if(this.player1pos == 100){
      this.isGameOver = `yes`
      return `Player 1 Wins!`
    }
    // switch player turns (if both dies are not equal). Else, keep the same (player gets a 2nd turn for free)
    if(die1 !== die2){
      if(this.whosTurn == `p1`) this.whosTurn = `p2`
      else this.whosTurn = `p1`
    }
    return `Player 1 is on square ${this.player1pos}`
  }else{
    if(this.player2pos == 100){
      this.isGameOver = `yes`
      return `Player 2 Wins!`
    }
    if(die1 !== die2){
      if(this.whosTurn == `p1`) this.whosTurn = `p2`
      else this.whosTurn = `p1`
    }
    return `Player 2 is on square ${this.player2pos}`
  }
}
