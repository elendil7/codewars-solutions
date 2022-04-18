const firstNonConsecutive=(a)=>{
  for(let i = 0; i < a.length-1; i++){
    if(a[i]+1===a[i+1]) continue;
    else return a[i+1]
  }
  return null;
}
