function letterCount(s){
  let results = {}
  
  for(let i=0; i<s.length; ++i){
    if(!results[s[i]]){
      results[s[i]] = 1
    }else{
      results[s[i]] ++
    }
  }
  
  return results
}
