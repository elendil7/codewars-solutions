function getStrings(city){
  let arr = [...city.toLowerCase()]
  let obj = {}
  let result = []
  
  for(let i=0; i<arr.length; ++i){
    if(/[a-z]/i.test(arr[i])){
      if(!obj[arr[i]]) obj[arr[i]] = 1
      else obj[arr[i]] ++
    }
  }
  
  for(let key in obj){
    result.push(`${key}:${`*`.repeat(obj[key])}`)
  }
  
  return result.join`,`
}
