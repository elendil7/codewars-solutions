function game(n) {
  /* Explanation */
  
  /*
    // * Description
    - g964 used to play a 2 player game using a chessboard.
    - The chessboard consisted of 8 rows and 8 columns.
    
    - On the bottom row, you would have the following numbers:
      1/2, 2/3, 3/4, 4/5, 5/6, 6/7, 7/8, 8/9
    - On the secoond row (from the bottom), you would have:
      1/3, 2/4, 3/5, 4/6, 5/7, 6/8, 7/9, 8/10
    - Then on the third row (from the bottom), you would have:
      1/4, 2/5, 3/6, 4/7, 5/8, 6/9, 7/10, 8/11
    - Finally, on the last (top row), you would have:
      1/9, 2/10, 3/11, 4/12, 5/13, 6/14, 7/15, 8/16
      
    - When all the numbers have been placed on the chessboard, you would toss a coin.
      The player who attains "heads" wins, and the losing player must give the winner
      the total sum of numbers on the chessboard (in dollars $).
      
    // * Task
    - You must find out how much either of the players can win or lose for each game,
      depending on the total size of the chessboard (provided with the input n; n x n size).
    - Upon generating the chessboard, add all the fractional values, 
      providing the answer as a fully simplified fraction.
    
    // * Notes
    - The size of the board (input n) will always be n >= 0
    - The solution should be returned in this format: [numerator, denominator]
  */
  
  /* Implementation */
  // define variables
  let total = 0
  
  /*
  // for 1 to n (chessboard columns) (numerators)
  for(let i = 1; i <= n; ++i){
    // for 1 to n (chessboard rows) (denominators)
    for(let j = 1; j <= n; ++j){
      // add fraction to total
      total += i / (j+i)
    }
  }
  */
  
  // log values
  console.log(n)
  
  // Easier method (through analyzing test cases)
  // edge cases
  if(n == 0) return [n]
  if(n == 1) return [1,2]
  
  // if n is even
  if(n % 2 === 0){
    // return numerator and denominator of net sum of fractions
    return [(n*n)/2]  
  // if n is odd
  }else{
    return [(n*n),2]
  }
}

game=n=>n<1?[n]:n<2?[1,2]:n%2?[(n*n),2]:[(n*n)/2]

game=n=>n%2?[n*n,2]:[n*n/2]
