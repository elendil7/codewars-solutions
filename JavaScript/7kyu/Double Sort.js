function dbSort(arr){
  let nums = arr.filter(v=>typeof(v)==`number`).sort((a,b)=>a-b)
  let strs = arr.filter(v=>typeof(v)==`string`).sort((a,b)=>a.localeCompare(b))
  
  return nums.concat(strs)
}
