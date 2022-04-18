isValidWalk=w=>{
  // edge case checking
  if(w.length > 10 || w.length < 10) return false;
  
  // create obj to store data
  const obj = {"n": 0, "e": 0, "s": 0, "w": 0}
  
  // 10 minute walk
  for(let i = 0; i < w.length && i < 10; i++){
    // increment position by 1
    obj[w[i]]++
  }
  
  console.log(w)
  console.log(obj)
    
  console.log(obj["n"] === obj["s"] && obj["e"] === obj["w"])
  
  // if person ends up at starting point (after 10 mins), return true. Else, false.
  if(obj["n"] === obj["s"] && obj["e"] === obj["w"]) return true;
  return false;
}
