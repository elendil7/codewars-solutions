function solve(s, k){
  let alphabet = `abcdefghijklmnopqrstuvwxyz`
  let index = 0
  let arr = [...s]
  
  while(k > 0 && arr.length > 0){
    for(let i = 0; i < arr.length; ++i){
      if(arr[i] == alphabet[index]){
        arr.splice(i, 1)
        i --
        k --
      }
      if(k === 0) break
    }
    if(!arr.includes(alphabet[index])) index ++
  }
  
  return arr.join``
}
