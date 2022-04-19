function consecutive(arr, a, b) {
  for(let i = 0; i < arr.length - 1; ++i){
    if(
      (arr[i] == a && arr[i+1] == b) ||
      (arr[i+1] == a && arr[i] == b)
    ) return true
  }
  
  return false
}
