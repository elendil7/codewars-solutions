function distributionOf(golds){
  let totalA = 0
  let totalB = 0
  
  let arr = [...golds]
  
  for(let i=0; i<arr.length; ++i){
    // for A
    if(i%2 == 0){
      if(golds[0] >= golds[golds.length-1]){
        totalA += golds.shift()
      }else{
        totalA += golds.pop()
      }
    // for B  
    }else{
      if(golds[0] >= golds[golds.length-1]){
        totalB += golds.shift()
      }else{
        totalB += golds.pop()
      }
    }
  }
  
  return [totalA, totalB]
}
