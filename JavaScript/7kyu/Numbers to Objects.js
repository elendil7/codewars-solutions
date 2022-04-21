function numObj(arr){
  let res = []
  
  for(let i = 0; i < arr.length; ++i){
    let obj = {}
    obj[arr[i]] = String.fromCharCode(arr[i])
    res.push(obj)
  }
  
  return res
}
