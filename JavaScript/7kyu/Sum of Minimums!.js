function sumOfMinimums(arr) {
  return arr.map(v=>Math.min(...v)).reduce((a,b)=>a+b)
}

sumOfMinimums=a=>a.reduce((a,b)=>a+Math.min(...b),0)
