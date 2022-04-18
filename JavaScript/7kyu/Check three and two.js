function checkThreeAndTwo(arr) {  
  for(let i=0; i<arr.length; ++i){
    if((l=>l<2||l>3)(arr.filter(v=>v==arr[i]).length)) return false
  }
  return true
}
