function capital(capitals){
  let result = []
  
  for(let key in capitals){
    result.push(`The capital of ${capitals[key].country || capitals[key].state} is ${capitals[key].capital}`)
  }
  
  return result
}
