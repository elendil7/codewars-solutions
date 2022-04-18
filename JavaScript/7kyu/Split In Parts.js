var splitInParts = function(s, partLength){
  let result = [], temp = ``
  
  for(let i=0; i<s.length; ++i){
    if(i%partLength == 0){
      result.push(temp)
      temp = ``
    }
    if(i==s.length-1){
      temp+=s[i]
      result.push(temp)
    }
    temp+=s[i]
  }
  
  return result.slice(1).join` `
}
