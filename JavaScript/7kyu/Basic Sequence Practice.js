function sumOfN(n) {
  let arr = [...Array(Math.abs(n)+1)]
  
  for(let i=0; i < arr.length; i++){
    arr[i] = i + (arr[i-1]===undefined?0:arr[i-1])
  }
  
  return n<0?arr.map(v=>v>0?-v:0):arr
}
