function dashatize(num) {
  if(!num) return ``+num
  
  let arr = [...String(Math.abs(num))]
  let result = []
  
  for(let i=0; i<arr.length; ++i){
    if(+arr[i] % 2){
      result.push(`-`+arr[i]+`-`)
    }else{
      result.push(arr[i])
    }
  }
  
  result = result.join``.replace(/--/g,`-`)
  
  if(result[0] == `-`) result = result.slice(1)
  if(result[result.length-1] == `-`) result = result.slice(0, -1)
  
  return result
}

dashatize=(n,a=[...``+Math.abs(n)].map(v=>v%2?`-`+v+`-`:v).join``.replace(/--/g,`-`))=>{
  if(!n)return``+n
  if(a[0]==`-`)a=a.slice(1)
  if(a[a.length-1]==`-`)a=a.slice(0,-1)
  return a
}
