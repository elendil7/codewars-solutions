function noRepeat(str) {  
  let o = {}
  
  for(let i = 0; i < str.length; ++i){
    if(!o[str[i]]) o[str[i]] = 1
    else o[str[i]] ++
  }
  
  for(let key in o){
    if(o[key] == 1){
      return key
    }
  }
}
