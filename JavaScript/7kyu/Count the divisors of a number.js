const getDivisorsCnt=(n)=>{
  let d = 1;
  let c = 1;
  while(d<n){
    if(n%d===0)c++
    d++
  }
  return c;
}
