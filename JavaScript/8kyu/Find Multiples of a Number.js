function findMultiples(i,l) {
  let count = i, res = []
  while(count <= l){
    res.push(count)
    count+=i
  }
  return res
}
