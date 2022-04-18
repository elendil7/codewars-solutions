function SeriesSum(n)
{
  if(n === 0) return n.toFixed(2);
  let num = 1;
  let den = 4;
  for(let i = 1; i < n; i++){
    num += 1/den;
    den += 3;
  }
  return num.toFixed(2);
}
