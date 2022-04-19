function remove (str) {  
  let result = []
  let checker = 0
  
  for(let i = str.length - 1; i >= 0; --i){
    if(str[i] !== `!`){
      checker = 1
    }
    
    if(checker === 0){
      result.push(str[i])
    }else if(checker === 1 && str[i] !== `!`){
      result.push(str[i])
    }
  }
  
  return result.reverse().join``
}
