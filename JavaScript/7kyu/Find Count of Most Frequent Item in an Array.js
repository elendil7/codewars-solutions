function mostFrequentItemCount(collection) {
  let obj = {}
  let max = 0
  
  for(let i=0; i<collection.length; ++i){
    if(!obj[collection[i]]) obj[collection[i]] = 1
    else obj[collection[i]] ++
  }
  
  for(let key in obj){
    max = Math.max(max, obj[key])
  }
  
  return max
}
