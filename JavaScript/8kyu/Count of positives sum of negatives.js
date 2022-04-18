function countPositivesSumNegatives(a) {
  // edge cases (empty array & array with zeroes)
  if(!a || a.length == 0) return []
  if(a.filter(v=>v).length==0) return []
  
  let count = [0,0]
  
  a.map(function(v){
    // if negative
    if(Math.abs(v)!=v) count[1] = count[1]+v
    else if(v>0) count[0]++
  })
  
  return count
  
}

countPositivesSumNegatives=a=>{
  let x=0,y=0
  return !a||a.filter(v=>v).length==0?[]:a.map(v=>v>0?++x:y+=v)?[x,y]:[]
}

countPositivesSumNegatives=a=>{
  let x=0,y=0
  return !a||a.length<1?[]:a.map(v=>v>0?++x:y+=v)?[x,y]:[]
}

countPositivesSumNegatives=a=>{let x=0,y=0;return!a||a.length<1?[]:a.map(v=>v>0?++x:y+=v)?[x,y]:[]}
