function averageSquaredInt(arr) {
  return (a=>a[0]?Math.round(a.reduce((a,b)=>a + b*b,0) / a.length):0) (arr.filter(v=>!(v%2) && v>0 && parseInt(v) === v))
}
