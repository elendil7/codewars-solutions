largestDifference=(d)=>{
  let max = 0
  for(i=0;i<d.length;++i){
    for(x=i;x<d.length;++x){
      if(d[i] <= d[x]){
        max = Math.max(max,x-i)
      } 
    }
  }  
  return max
}

largestDifference=d=>Math.max(...[].concat(...d.map((v,x)=>d.map((v,y)=>d[x]<=d[y]?y-x:0))))
