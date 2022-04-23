function binaryToString(binary) {
  if(binary.length === 0) return ``
  
  let temp = ``
  let binSplit = []
  
  for(let i = 0; i < binary.length; ++i){
    temp += binary[i]
    if((i+1)%8 === 0){
      binSplit.push(temp)
      temp = ``
    }
  }
  
  return binSplit.map(v=>String.fromCharCode(parseInt(v, 2))).join``
}
