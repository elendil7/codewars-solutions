pairs=a=>{
  let count = 0
  
  for(let i=0;i<a.length-1;i+=2){
    if(Math.abs(a[i]-a[i+1])==1) count++
  }
  
  return count
}

pairs=a=>a.map((v,i)=>!(i%2)&Math.abs(a[i]-a[i+1])==1?1:0).reduce((a,b)=>a+b)
