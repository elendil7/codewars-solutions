function howManySmaller(arr,n){
  return arr.map(v=>v.toFixed(2)).filter(v=>v<n).length
}
