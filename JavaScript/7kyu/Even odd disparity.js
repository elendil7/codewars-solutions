function solve(a){
  return a.filter(v=>/\d/.test(v)).filter(v=>v%2==0).length - a.filter(v=>/\d/.test(v)).filter(v=>v%2).length
}
