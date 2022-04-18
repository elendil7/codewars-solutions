encryptThis=t=>{
  let res = [], current, temp = []
  
  let arr = t.split(" ")
  
  for(let i = 0; i < arr.length; i++){
    current = arr[i]
    
    temp.push(current.charCodeAt(0))
    
    if(current.length > 1){
      temp.push(current.slice(-1))
      temp.push(current.slice(2,-1))
      if(current.length !== 2){
        temp.push(current.slice(1,2))
      }
    }
      
    res.push(temp.join(``))
    temp = []
  }
  
  return res.join(" ")
}

// return t.length<2?String(t.charCodeAt(0)):t.split` `.map(v=>v[0].charCodeAt(0) + v.slice(-1) + v.slice(1,-1)).join` `
