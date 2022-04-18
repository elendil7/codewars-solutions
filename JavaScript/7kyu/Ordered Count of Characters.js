var orderedCount = function (text) {
  let arr = [...text]
  let chars = {}
  let result = []
    
  arr.map((v,i)=>{
    if(!chars[v]){
      chars[v] = 1
    }else{
      chars[v]++
    }
  })
  
  for(let key in chars){
    result.push([key, chars[key]])
  }
  
  result.sort((a,b)=>text.indexOf(a[0])-text.indexOf(b[0]))
  
  return result
}

orderedCount=(t,c={},r=[])=>{
  [...t].map((v)=>!c[v]?c[v]=1:c[v]++)
  for(k in c)r.push([k,c[k]])
  return r.sort((a,b)=>t.indexOf(a[0])-t.indexOf(b[0]))
}
