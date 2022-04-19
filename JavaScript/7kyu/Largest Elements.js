function largest(n,xs){
  xs.sort((a,b)=>b-a)
  return xs.slice(0,n).sort((a,b)=>a-b)
}
