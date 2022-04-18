function createDict(keys, values){
  let obj = {}
  
  for(let i = 0; i < keys.length; ++i){
    if(values[i] === undefined){
      obj[keys[i]] = null
    }else{
      obj[keys[i]] = values[i]
    }
  }
  
  return obj
}
