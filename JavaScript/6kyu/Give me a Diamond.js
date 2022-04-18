function diamond(n){
  if(n < 0 || n%2===0) return null
    
  let center = -~n/2
  
  let res = ""
  
  for(let i = 1; i <= center; i++){
    res = `${res}${" ".repeat(Math.abs(center-i))}${`*`.repeat(i*2-1)}\n`
  }
  for(let i = center-1; i >= 1; i--){
    res = `${res}${" ".repeat(Math.abs(center-i))}${`*`.repeat(i*2-1)}\n`
  }
  
  return res
  
}

diamond=n=>{
  let center=-~n/2,res=""
  
  for(i=1;i<=center;i++){
    res+=`${" ".repeat(Math.abs(center-i))}${`*`.repeat(i*2-1)}\n`
  }
  for(i=center-1;i>=1;i--){
    res+=`${" ".repeat(Math.abs(center-i))}${`*`.repeat(i*2-1)}\n`
  }
  return n<0|n%2==0?null:res
}

diamond=n=>{
  let c=-~n/2,r=""
  for(i=1;i<=c;i++){
    r+=`${' '.repeat(Math.abs(c-i))}${`*`.repeat(i*2-1)}\n`
  }
  for(i=c-1;i>=1;i--){
    r+=`${' '.repeat(Math.abs(c-i))}${`*`.repeat(i*2-1)}\n`
  }
  return n<0|n%2==0?null:r
}
