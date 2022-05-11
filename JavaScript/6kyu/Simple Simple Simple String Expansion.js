function stringExpansion(s) {
  let currentNum = 1
  let res = ``
  
  for(let i = 0; i < s.length; ++i){
    if(/\d/.test(s[i])){
      currentNum = s[i]
    }else{
      res += s[i].repeat(currentNum)
    }
  }
  
  return res
}
