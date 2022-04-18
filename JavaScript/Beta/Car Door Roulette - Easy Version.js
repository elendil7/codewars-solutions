function carD(s, x){  
  /*
    // * Reference
    s = line of parked cars (each char is a car)
    x = your position on that string, as the cyclist
    
    \ = open door of car facing the same way you're going; threatening
    / = open door of a car facing you, which is non-threatening
    
    // * Task
    - Check whether there are any open doors on your ride, whether they knock you off, and how badly.
    - You must take into account the fact that people opening car doors don't leave them open indefinitely,
      meaning open doors only stay open for a fixed period of time.
    - Upon detecting an open door (\), check whether it is level with you, or 1 or 2 steps ahead of you.
      If so, return `Crash, Bang, Ouch!`
    - Alternatively, if an open door (/) is not as dangerous, you only need to check
      if its level with you, or 1 step ahead. If it satisfies these conditions, 
      return `Knocked Off, Dust Yourself Down.`.
    - Lastly, if neither of the conditions above are satisfied, return `Plain Sailing!`.
  */
  
  // log values
  console.log(s, x)
  console.log(s.length)
  console.log(s[x])
  
  // check for opened doors (dangerous version)
  for(let i = x; i <= x + 2; ++i){
    if(s[i] === `\\`){
      return `Crash, Bang, Ouch!`
    }
  }
  
  // check for opened doors (non-threatening version)
  for(let i = x; i <= x + 1; ++i){
    if(s[i] === `/`){
      return `Knocked Off, Dust Yourself Down.`
    }
  }
  
  // if none of the conditions above are satiated, return Plain Sailing
  return `Plain Sailing!`
}
