function completeSeries(arr) {
  if([...new Set(arr)].length !== arr.length) return [0]
  return [...Array(Math.max(...arr)+1)].map((v,i)=>i)
}
