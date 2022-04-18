function getMissingElement(arr){
  if(!arr.sort((a,b)=>a-b).includes(0)) return 0
  
  let count = arr[0]
  
  while(arr[count] === count){
    count++
  }
  
  return count
}
