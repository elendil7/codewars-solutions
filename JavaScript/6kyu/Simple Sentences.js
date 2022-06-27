function makeSentence(parts) {
  parts = parts.filter(v=>v!==".")
  let res = ""
  
  for(let i = 0; i < parts.length; ++i){
    for(let y = 0; y < parts[i].length; ++y){
      if(parts[i][y] === ","){
        res = res.slice(0, -1) + ","
      }else{
        res += parts[i][y]
      }
    }
    if(i !== parts.length - 1) res += " "
  }
  
  return res + "."
}
