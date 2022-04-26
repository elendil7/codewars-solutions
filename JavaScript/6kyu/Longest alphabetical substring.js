function longest(str) {
  let alphabet = `abcdefghijklmnopqrstuvwxyz`
  let temp = ``
  let maxSubstring = ``
  
  for(let i = 0; i <= str.length; ++i){
    if(alphabet.indexOf(str[i]) <= alphabet.indexOf(str[i+1])){
      temp += str[i]
    }else{
      temp += str[i]
      maxSubstring = maxSubstring.length >= temp.length ? maxSubstring : temp
      temp = ``
    }
  }
      
  return maxSubstring
}
