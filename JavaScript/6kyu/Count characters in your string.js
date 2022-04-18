count=s=>{  
  let obj = {}
  
  for(let i = 0; i < s.length; i++){
    let v = s.charAt(i);
    if(!obj[v]) obj[v] = 1
    else obj[v]++
  }
  
  return obj;
}
