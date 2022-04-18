function solve(s){
  if(s.length != new Set(s).size) return false

  let x = `abcdefghijklmnopqrstuvwxyz`.repeat(s.length)
  let arr = [...s].sort((a,b)=>a.localeCompare(b))
  
  for(let i = 0; i < arr.length - 1; ++i){
    if(x.indexOf(arr[i]) + 1 !== x.indexOf(arr[i+1])) return false
  }
  
  return true
}
