function crap(x, bags, cap){
  let arr = [].concat(...x)
  let totalSpace = bags * cap
  let count = 0
  
  if(arr.includes(`D`)) return `Dog!!`
  
  for(let i=0; i<arr.length; ++i){
    if(arr[i] == `@`){
      count ++
      if(count > totalSpace){
        return `Cr@p`
      }
    }
  }
  
  return `Clean`
}
