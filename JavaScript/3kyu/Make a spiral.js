function spiralize (n) {
  // create spiral, fill with 0s
  let spiral = [...Array(n)].map(v=>[...Array(n)].map(v=>0))
  
  let nextDirection = {
    "R": "D",
    "D": "L",
    "L": "U",
    "U": "R"
  }
  let direction = "R"
  let coords = {
    "x": 0,
    "y": 0
  }
  let filler = n - 1
  let count = 0
  
  // console.log(direction, coords, filler, count)
  
  // * fill rows & cols with "0" to create spiral
  while(filler > 0){
    // console.log(`Direction: ${direction}`, `Filler: ${filler}, Coord x: ${coords.x} Coord y: ${coords.y}`, spiral)
    
    // if there is a 1 value, in any of the 4 positions 1 step diagonally from the current, break loop once and for all
    if(coords.x != 0 && coords.y != 0 && coords.x != n-1 && coords.y != n-1){
      if(spiral[coords.x+1][coords.y+1] + 
         spiral[coords.x-1][coords.y-1] + 
         spiral[coords.x+1][coords.y-1] + 
         spiral[coords.x-1][coords.y+1] >= 1 && n / 2===0) break
      }
        
    if(direction == "R"){
      if(spiral[coords.y][coords.x+3] == 1){
        spiral[coords.y][coords.x+1] = 1
        break
      }
      for(let x=coords.x; x<=coords.x+filler; ++x){
//         console.log(coords.y,x)
        spiral[coords.y][x] = 1
      }
      coords.x = coords.x + filler
      
    }else if(direction == "D"){
      if(spiral[coords.y+3][coords.x] == 1){
        spiral[coords.y+1][coords.x] = 1
        break
      }
      for(let y=coords.y; y<=coords.y+filler; ++y){
//         console.log(y, coords.x)
        spiral[y][coords.x] = 1
      }
      coords.y = coords.y + filler
      
    }else if(direction == "L"){
      if(spiral[coords.y][coords.x-3] == 1){
        spiral[coords.y][coords.x-1] = 1
        break
      }
      for(let x=coords.x; x>=coords.x-filler; --x){
//         console.log(coords.y,x)
        spiral[coords.y][x] = 1
      }
      coords.x = coords.x - filler
      
    }else if(direction == "U"){
      if(spiral[coords.y-3][coords.x] == 1){
        spiral[coords.y-1][coords.x] = 1
        break
      }
      for(let y=coords.y; y>=coords.y-filler; --y){
//         console.log(y, coords.x)
        spiral[y][coords.x] = 1
      }
      coords.y = coords.y - filler
    }
    
    // change direction (turn right)
    direction = nextDirection[direction]
    // increase count (if === 3, filler will start being decreased by 2 next round)
    count ++
    // if count is >= 2 and count is odd (every 2 steps), decrease filler by 2
    if(count >= 2 && count % 2) filler -= 2
  }
  
  /*
  console.log(`Final spiral: `, spiral)
  console.log(`N: ${n}`)
  */
  return spiral
}
