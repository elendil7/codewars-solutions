function change(string){
  let result = `abcdefghijklmnopqrstuvwxyz`.split``
  
  for(let i = 0; i < result.length; ++i){
    if(string.toLowerCase().includes(result[i])){
      result[i] = 1
    }else{
      result[i] = 0
    }
  }
  
  return result.join``
}
