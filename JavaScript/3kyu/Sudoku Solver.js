const sudoku = (grid) => {
  console.log(grid)
  
  // check if 1x9 row does contains "num"
  function isNumberInRow(grid, r, c, num){
    // loop through entire grid
    for(let y = 0; y < 9; y++){
      // check if number exists in row
      if(grid[r][y] === num) return true;
    }
    // if test above passes, return true
    return false;
  }
  
  // check if 9x1 column already contains "num"
  function isNumberInColumn(grid, r, c, num){
    // loop through entire grid
    for(let y = 0; y < 9; y++){
      // check if number exists in column
      if(grid[y][c] === num) return true;
    }
    // if test above passes, return true
    return false;
  }
  
  // check if 3x3 square already contains "num"
  function isNumberInSquare(grid, r, c, num){
    // get top left index of current 3x3 square
    let localBoxRow = r - r % 3;
    let localBoxCol = c - c % 3;
    
    // iterate through the 3 rows of the 3x3 square
    for(let x = localBoxRow; x < localBoxRow + 3; x++){
      // iterate through the 3 columns of the 3 rows of the 3x3 square
      for(let y = localBoxCol; y < localBoxCol + 3; y++){
        // check if number already exists in square
        if(grid[x][y] === num) return true;
      }
    }
    return false;
  }
  
  /* main process for sequentially filling numbers into grid, and
  backtracking if current number doesn't pass validity checks (above) */
  function process(grid){
    // for rows (1-9)
    for(let r = 0; r < 9; r++){
      // for columns (1-9)
      for(let c = 0; c < 9; c++){
        // if current square is empty
        if(grid[r][c] === 0){
          // for each possible number (1-9)
          for(let i = 1; i < 10; i++){
            /* if number passes all tests (does not already exist in row, column or square)
            assign it to current square value */
            if(!isNumberInRow(grid, r, c, i) && !isNumberInColumn(grid, r, c, i) && !isNumberInSquare(grid, r, c, i)){
              // set current square value
              grid[r][c] = i;
              
              /* test if next value can be successfully added.
              If it cannot be added (return false triggered below), reset current value.
              This has the same effect as backtracking to the previous square,
              as its value is now "0", so the function will attempt to assign a value 
              to it (0-9) when it runs again. */
              if(process(grid)) {
                return true;
              } else {
                grid[r][c] = 0;
              }
            }
          }
          /* if unable to solve (no working number) return false.
          This only occurs if the sudoku grid itself is invalid (impossible to solve). */
          return false;
        }
      }
    }
    // once all nested for loop processes finish running, return true to exit function
    return true;
  }
  
  console.log(grid)
  
  // run main sudoku solver process
  process(grid);
  
  // return filled in puzzle grid
  return grid;
}
