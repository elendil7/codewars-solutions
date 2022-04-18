function tripleX(str){
  let thing = false
  let count = 0
  
  for(let i=0; i<str.length; ++i){
    if(str[i] === `x`){
      thing = true
      count ++
    }
    
    if(count === 3) return true

    if(thing === true && str[i] !== `x`) return false
  }
  
  return false
}
