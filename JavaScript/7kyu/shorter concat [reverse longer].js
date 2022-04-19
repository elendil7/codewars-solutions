function shorter_reverse_longer(a,b){
  let arr = [a, b].sort((a,b)=>a.length-b.length)  
  let shorterStr = a.length === b.length ? b : arr[0]
  let longerStr = a.length === b.length ? a : arr[1]
      
  return shorterStr + [...longerStr].reverse().join`` + shorterStr
}
