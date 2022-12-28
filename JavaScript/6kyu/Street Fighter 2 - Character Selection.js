function streetFighterSelection(fighters, curPos, moves){
  console.log("Fighters #1: ", fighters[0])
  console.log("Fighters #2: ", fighters[1])
  console.log("Current pos: ", curPos)
  console.log("Moves: ", moves)
  
  let curPosX = curPos[0], curPosY = curPos[1], fightersHoveredOver = []

  for(let i = 0; i < moves.length; ++i){    
    switch(moves[i]){
      case "up":
        if(curPosX === 1) curPosX = 0
        break
      case "down":
        if(curPosX === 0) curPosX = 1
        break
      case "left":
        if(curPosY === 0) curPosY = fighters[0].length - 1
        else curPosY --
        break
      case "right":
        if(curPosY === fighters[0].length - 1) curPosY = 0
        else curPosY ++
        break
    }
    // update fightersHoveredOver arr
    fightersHoveredOver.push(fighters[curPosX][curPosY])
  }
  
  return fightersHoveredOver
}
