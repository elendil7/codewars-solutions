function solve(a,b){
  if(a<1||b<1){
    return [a,b]
  }else if(a>=2*b){
    return solve(a-2*b,b)
  }else if(b>=2*a){
    return solve(a,b-2*a)
  }else{
    return [a,b]
  }
}
