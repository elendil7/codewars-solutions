function translate(str){
  let temp
  let arr = [...str]
  
  for(let i = 0; i < arr.length; ++i){
    if(str[i].toUpperCase() == str[i]){
      temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
      ++i
    }
  }
    
  return arr.join``.toLowerCase()
}
