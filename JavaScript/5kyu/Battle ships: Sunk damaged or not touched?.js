function damagedOrSunk (board, attacks){
  console.log("Board: ")
  board.forEach(v=>console.log(v.join("")))
  
  board.reverse()
  
  console.log("Reversed board: ")
  board.forEach(v=>console.log(v.join("")))
  
  // decrease all attack grid indexes by 1 to compensate for array indexes starting at 0
  attacks = [...attacks].map(v=>v.map(x=>x-1))
  console.log("Attacks: ", attacks)

  // get all boat coordinates
  let boatLocations = {}
  
  for(let x = 0; x < board[0].length; ++x){
    for(let y = 0; y < board.length; ++y){
      const boatValue = board[y][x]
      if(boatValue != 0){
        const xy = [x, y]
        if(!boatLocations[boatValue]) boatLocations[boatValue] = [xy]
        else boatLocations[boatValue].push(xy)
      }
    }
  }
  
  console.log("Boat locations: ", boatLocations)
  
  // get boat lengths
  let boatLengths = {}
  for(const [key,val] of Object.entries(boatLocations)){
    boatLengths[key] = val.length
  }
  
  console.log("Boat lengths: ", boatLengths)
  
  // attack boat
  for(let i = 0; i < attacks.length; ++i){
    const curAttack = attacks[i]
    const curAttackX = curAttack[0]
    const curAttackY = curAttack[1]
    
    // get grid value using attack coordinates
    const locationVal = board[curAttackY][curAttackX]
        
    // if boat included in object
    if(boatLengths[locationVal]){
      // get array of current boat coordinates
      const bLocations = boatLocations[locationVal]
      // loop through array of current boat coordinates
      for(let i = 0; i < bLocations.length; ++i){
        // get current coordinate from array of multiple boat coordinates
        const coord = bLocations[i]
        // find if attack coordinate exists
        if(coord.join("") === curAttack.join("")){
          console.log("You are here")
          console.log("Current attack: ", curAttack)
          // remove coordinate from boatLocations object array
          boatLocations[locationVal].splice(i, 1)
        }
      }
    }
  }
  
  console.log("Updated boat locations: ", boatLocations)
  
  // calculate points & other required values
  let information = { "sunk": 0, "damaged": 0 , "notTouched": 0, "points": 0 }
  
  for(const [key,coords] of Object.entries(boatLocations)){
    console.log(key,coords)
    // if boat coords arr length == 0 (no boat piece left), it is fully sunk
    if(coords.length === 0){
      information["sunk"] += 1
      information["points"] += 1
    }
    // if boat coords arr length == original length (all boat pieces remain), it hasn't been hit at all
    else if(coords.length === boatLengths[key]){
      information["notTouched"] += 1
      information["points"] -= 1
    }
    // otherwise, boat has been hit but not fully sunk
    else{ 
      information["damaged"] += 1
      information["points"] += 0.5
    }
    
  }
    
  console.log("Info: ", information)
  
  // return total points
  return information
}
