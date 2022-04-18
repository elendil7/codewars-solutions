function gps(s, x) {
  if(!x[2]) return 0  
  let arr = []
  
  for(i=0;i<x.length-1;++i){
    arr.push(Math.abs(x[i+1]-x[i])*3600/s)
  }
      
  return ~~Math.max(...arr)
}

gps=(s,x)=>x[2]?~~Math.max(...x.map((v,i)=>Math.abs(x[i+1]-v)*3600/s).filter(v=>v)):0
