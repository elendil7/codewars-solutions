function consecutive(arr) {
  let count = 0
  for(let i = arr.sort((a,b)=>a-b)[0]; i <= arr[arr.length-1]; ++i){
    if(!arr.includes(i)) count++
  }
  
  return count
}
