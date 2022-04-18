function remove(s,n){  
  let arr = [...s]
  let result = []
  
  for(let i=0; i<arr.length; ++i){
    if(arr[i] == `!`){
      n--
    }else{
      result.push(arr[i])
    }
        
    if(n == 0){
      result.push(arr.slice(i+1).join``)
      break
    }
    
  }
  return result.join``
}

remove=(s,n,r=[])=>{
  for(i=0;i<s.length;++i){if(s[i] == `!`)n--;else r.push(s[i]);if(n<1){r.push([...s].slice(++i).join``);break}}
  return r.join``
}
