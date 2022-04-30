function isNormal(n){
  if(n < 1) return false
  
  for(let i = 2; i < n; ++i){
    if(n % i === 0 && i % 2) return false
  }
  
  return true
}
