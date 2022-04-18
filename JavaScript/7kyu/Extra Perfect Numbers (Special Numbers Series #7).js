function extraPerfect(n){
  return [...Array(n)].map((v,i)=>++i).filter((v)=>(x=>x[0]==`1`&&x[x.length-1]==`1`)(v.toString(2)))
}
