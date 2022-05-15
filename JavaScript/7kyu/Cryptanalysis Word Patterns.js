function wordPattern(word) {
  word = word.toLowerCase()
  
  let max = 0
  let alreadyExist = {}
  let res = []
  
  for(let i = 0; i < word.length; ++i){
    // get current char
    const cur = word[i]
    // if char exists in object
    if(alreadyExist[cur] !== undefined){
      // push the number correlating to it to array
      res.push(alreadyExist[cur])
    // if char does not exist in object
    }else{
      // push the number correlating to it to array
      res.push(max)
      // add char to object (set value to max)
      alreadyExist[cur] = max
      // increment max by 1 (for next unique char)
      max ++
    }
  }
  
  return res.join(".")
}
