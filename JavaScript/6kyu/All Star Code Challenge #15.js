function rotate(str){
  if(!str) return []
  
  let base = str.repeat(2)
  let output = []
  let temp
  
  for(let i = 1; i < str.length + 1; ++i){
    temp = ""
    for(let j = i; j < str.length + i; ++j){
      temp += base[j]
    }
    output.push(temp)
  }
  
  return output
}
