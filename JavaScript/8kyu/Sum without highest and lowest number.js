function sumArray(a) {
  if(!a || a.length === 0 || a.length === 1 || a.length === 2) return 0;
  return Object.values(a).sort((a,b) => a-b).slice(1, -1).reduce((a,b) => a+b)
}
