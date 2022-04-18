compose=(...a)=>{  
  let arr = [...a], result = arr[0]
  for(let i = 1; i < arr.length; i++){
    result = arr[i](result)
  }
  return result
}

compose=(...a)=>a[0]?a.reduce((a,b,i,x)=>i>0?b(a):b(x[0])):undefined
