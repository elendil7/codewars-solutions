function scale(str, k, n) {
  let arr = str.split`\n`
  let finalResult = []
  
  // vertically scale
  let verticalScale = arr.map(v=>[...v].map(c=>c.repeat(k)).join``)
  
  // horizontally scale
  for(let i = 0; i < verticalScale.length; ++i){
    for(let j = 0; j < n; ++j){
      finalResult.push(verticalScale[i])
    }
  }
  
  return finalResult.filter(v=>v).join`\n`
}
