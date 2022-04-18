function solution(l){
  let a = [];
  let count = 0;
  for(let i = 0; i < l.length; i++){
    if(l[i]+1 == l[i+1]){
      count+=1
    } else if(l[i]+1 != l[i+1] && count >= 2) {
      a.push(`${l[i-count]}-${l[i]}`)
      count = 0;
    } else{
      for(let x = count; x >= 0; x--) {
        a.push(l[i-x])
        count = 0;
      }
    }
  }
  return a.join(",");
}
