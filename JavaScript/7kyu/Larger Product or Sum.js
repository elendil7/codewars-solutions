function sumOrProduct(arr, n) {
  let sum = arr.sort((a,b)=>a-b).slice(-n).reduce((a,b)=>a+b,0)
  let product = arr.slice(0,n).reduce((a,b)=>a*b,1)
  
  return sum > product ? "sum" : product > sum ? "product" : "same"
}
