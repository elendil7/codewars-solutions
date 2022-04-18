function positiveSum(a) {
  let count = 0;
  a.filter(v => v > 0).map(v => count+=v);
  return count;
}

function positiveSum(a) {
  return a.filter(v => v > 0).length === 0 ? 0 : a.filter(v => v > 0).reduce((a,b) => a+b)
}
