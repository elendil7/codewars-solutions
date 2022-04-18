minSum=(a,b=a.sort((a,b)=>a-b),l=b.length,m=~~(l/2),s=0)=>{
  for(i=0;i<m;++i)s+=b[i]*b[l-i-1]
  return s
}
