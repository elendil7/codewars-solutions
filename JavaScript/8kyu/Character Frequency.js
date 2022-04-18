function charFreq(message) {
  let obj = {}
  
  for(let i=0; i<message.length; ++i){
    if(!obj[message[i]]) obj[message[i]] = 1
    else obj[message[i]] ++
  }
  
  return obj
}
