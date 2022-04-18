function noBoringZeros(n) {
  if(n==0) return n
  
  let arr = String(n).split("").reverse()
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]!=0) return Number(arr.slice(i).reverse().join(""))
  }
}
