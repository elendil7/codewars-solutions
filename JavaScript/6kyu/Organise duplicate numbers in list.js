function group(arr) {
  let noDuplicates = [...new Set(arr)]
  return noDuplicates.map(v=>[...Array(arr.filter(x=>x==v).length)].map((x,i)=>v))
}
