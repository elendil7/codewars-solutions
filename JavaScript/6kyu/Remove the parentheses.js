function removeParentheses(s){
  let isTrue = `no`
  let count = 0
  let result = []
  
  for(let i = 0; i < s.length; ++i){
    if(s[i] == `(`){
      isTrue = `yes`
      count ++
    }else if(isTrue == `no`){
      result.push(s[i])
    }
    
    if(s[i] == `)`){
      count --
      if(count == 0){
        isTrue = `no`
      }
    }
  }
  
  return result.join``
}
