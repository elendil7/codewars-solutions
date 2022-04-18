function solution(s){
  const a = s.split("")
  let r = []
  for(let i = 0; i < a.length; i++){
    if(i%2) continue;
    const y = !a[i+1] ? `_` : a[i+1];
    r.push(a[i] + y)
  }
  return r;
}
