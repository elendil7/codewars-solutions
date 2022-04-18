function flyBy(lamps, drone){  
  /*
    You're given 2 strings: lamps and drone.
    - Lamps represent a row of lamps, current off (represented by x)
      When these lamps are on, they are represented by o
    - The drone string represents the position of the drone (T).
      The flight path until the current location of the drone is represented by =
      Its drone flies from left to right, beginning at the start of the row of lamps (string)
    
    // * Task
    As a drone flies by a lamp, it automatically switches on (x => o)
    Thus, return the resulting lamps string, as the drone flies by.
  */
  
  /* Implementation */
  let result = ``
  let test = false
  
  for(let i=0; i<lamps.length; ++i){
    if(test === true){
      result += `x`
    }else if(drone[i] == `T`){
      result += `o`
      test = true
    }else{
      result += `o`
    }
  }
  
  return result
}
