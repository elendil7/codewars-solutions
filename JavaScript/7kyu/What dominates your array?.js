function dominator(arr) {
  let mid = ~~(arr.length/2)
  let obj = {}
  
  for(let i = 0; i < arr.length; ++i){
    if(!obj[arr[i]]) obj[arr[i]] = 1
    else obj[arr[i]] ++
  }
  
  for(let key in obj){
    if(obj[key] > mid) return +key
  }
  
  return -1
}
