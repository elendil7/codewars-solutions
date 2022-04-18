function insertDash(num) {
  let arr = [...``+num]
  
  for(let i = 0; i < arr.length-1; ++i){
    if(arr[i]%2 && arr[i+1]%2){
      arr.splice(i+1, 0, `-`)
    }
  }
  
  return arr.join``
}
