function streetFighterSelection(fighters, curPos, moves){
  console.log("Fighters #1: ", fighters[0])
  console.log("Fighters #2: ", fighters[1])
  console.log("Current pos: ", curPos)
  console.log("Moves: ", moves)
  
  // Always flip X and Y for 2D arrays! Yes.
  let curPosY = curPos[0], curPosX = curPos[1], fightersHoveredOver = []

  for(let i = 0; i < moves.length; ++i){    
    switch(moves[i]){
      case "up":
        if(curPosY === 1) curPosY = 0
        break
      case "down":
        if(curPosY === 0) curPosY = 1
        break
      case "left":
        if(curPosX === 0) curPosX = fighters[0].length - 1
        else curPosX --
        break
      case "right":
        if(curPosX === fighters[0].length - 1) curPosX = 0
        else curPosX ++
        break
    }
    // update fightersHoveredOver arr
    fightersHoveredOver.push(fighters[curPosY][curPosX])
  }
  
  return fightersHoveredOver
}
