function mazeRunner(maze, directions) {
  // get starting position
  let currentPos = []
  for(let i=0; i<maze.length; ++i){
    for(let j=0; j<maze[i].length; ++j){
      if(maze[i][j] == 2){
        currentPos.push(i, j)
        break
      }
    }
  }
  
  // walk the specified path through the maze
  // for entire array of directions
  for(let i=0; i<directions.length; ++i){
    // adjust current coordinates according to position specified by direction
    if(directions[i] === `N`){
      currentPos[0] --
    }else if(directions[i] === `E`){
      currentPos[1] ++
    }else if(directions[i] === `S`){
      currentPos[0] ++
    }else if(directions[i] === `W`){
      currentPos[1] --
    }
    
    // if person is out of bounds of maze, return Dead
    if(maze[currentPos[0]] === undefined || maze[currentPos[0]][currentPos[1]] === undefined){
      return `Dead`    
    }
    
    // get current value of maze index
    let currentMazeSquare = maze[currentPos[0]][currentPos[1]]
    
    // check if current square is a wall (1)
    if(currentMazeSquare === 1){
      return `Dead`
    // check if current square is the finish line (3)
    }else if(currentMazeSquare === 3){
      return `Finish`
    }
  }
    
  // if you successfully navigate the maze (pass all tests above)
  return `Lost`
}
