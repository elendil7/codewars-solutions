function isValid(formula){
  // rule 1
  if(formula.includes(1) && formula.includes(2)){
    return false
  }
  
  // rule 2
  if(formula.includes(3) && formula.includes(4)){
    return false
  }
  
  // rule 3
  if((formula.includes(5) && formula.includes(6)) || (!formula.includes(5) && !formula.includes(6))){
    // rule 4
     if(formula.includes(7) || formula.includes(8)){
        return true
     }
  }
  
  // otherwise return false
  return false
}
