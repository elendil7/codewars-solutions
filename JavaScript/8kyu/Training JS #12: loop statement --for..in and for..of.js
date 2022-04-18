function giveMeFive(obj){
  // for in
  
  let result = []
  
  for(let key in obj){
    if(key.length == 5){
      result.push(key)
    }
    if(obj[key].length == 5){
      result.push(obj[key])
    }
  }
  
  return result
}
