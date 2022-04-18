function solve(a,b){
  let arr = [a, b]
  let res = ``
  
  for(let i=0; i<a.length; ++i){
    if(!b.includes(a[i])) res+=a[i]
  }
  for(let i=0; i<b.length; ++i){
    if(!a.includes(b[i])) res+=b[i]
  }
  
  return res
}
