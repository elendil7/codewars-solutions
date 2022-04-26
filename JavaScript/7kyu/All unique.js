function hasUniqueChars(str){
  let obj = {}
  
  for(let i = 0; i < str.length; ++i){
    if(!obj[str[i]]) obj[str[i]] = 1
    else obj[str[i]] ++
  }
  
  for(let key in obj){
    if(obj[key] > 1) return false
  }
  return true
}
