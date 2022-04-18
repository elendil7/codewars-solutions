snail=z=>{
  let a = [...z]  
  // edge cases
  if(a[0].length<1) return []
  if(a.length<2) return [].concat(...a)
    
  // variables
  let middle = Math.floor(a.length/2)
  let result = []
    
  while(a.length>0){
    // top
    while(a[0].length){
      result.push(a[0].shift())
    }
    // right
    for(let i = 0; i < a.length-1; ++i){
      result.push(a[i].pop())
    }
    // bottom
    while(a[a.length-1].length){
      result.push(a[a.length-1].pop())
    }
    // left
    for(let i = a.length-1; i >= 0; --i){
      result.push(a[i].shift())
    }
    // remove empty arrays
    a=a.filter(v=>!!v[0])
  }
  return result.filter(v=>v)
}

snail=a=>{
  r=[]
  while(a.length>0){
    while(a[0].length){r.push(a[0].shift())}
    for(i=0;i<a.length-1;++i){r.push(a[i].pop())}
    while(a[a.length-1].length){r.push(a[a.length-1].pop())}
    for(i=a.length-1;i>=0;--i){r.push(a[i].shift())}
    a=a.filter(v=>!!v[0])
  }
  return r.filter(v=>v)
}

snail=a=>{
  r=[]
  while(a.length>0){
    while(a[0].length){r.push(a[0].shift())}
    for(i=0;i<a.length-1;++i){r.push(a[i].pop())}
    while(a[a.length-1].length){r.push(a[a.length-1].pop())}
    for(i=a.length-1;i>=0;--i){r.push(a[i].shift())}
    a=a.filter(v=>v[0])
  }
  return r.filter(v=>v)
}
