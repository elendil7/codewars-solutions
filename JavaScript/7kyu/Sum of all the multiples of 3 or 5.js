function findSum(n) {
  let result = []
  for(let i = 1; i <= n; i++){
    if(i%3==0 || i%5 == 0) result.push(i)
  }
  return result.reduce((a,b)=>a+b);
}
