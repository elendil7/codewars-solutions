function splitTheBill(x) {
  let sum = 0
  
  for(let key in x){
    sum += x[key]
  }
  
  for(let key in x){
    x[key] = +(x[key] - sum/Object.keys(x).length).toFixed(2)
  }
  
  return x
}
