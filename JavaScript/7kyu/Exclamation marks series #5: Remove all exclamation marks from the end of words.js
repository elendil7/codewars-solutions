function remove (str) {
  let arr = str.split` `.reverse()
  let result = []
  
  for(let i = 0; i < arr.length; ++i){
    for(let x = arr[i].length - 1; x >= 0; --x){
      if(arr[i][x] !== `!`){
        result.push(arr[i].slice(0,x+1))
        break
      }
    }
  }
  
  return result.reverse().join` `
}
