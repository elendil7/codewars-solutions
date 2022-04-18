function duplicateEncode(w){
  let obj = {}
  let str = "";
  w.toLowerCase().split("").map(function(v) {
    if(obj[v] === undefined) obj[v] = 1;
    else obj[v]+=1;
  })
  for(let i = 0; i < w.length; i++){
    if(obj[w.charAt(i).toLowerCase()] > 1) str = str.concat(")")
    else str = str.concat("(")
  }
  return str;
}
