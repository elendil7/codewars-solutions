function duplicateCount(text){
  
  let obj = {}, char, count = 0
  
  for(let i = 0; i < text.length; i++){
    // get current char
    char = text[i].toLowerCase()
    
    // if char is not alphanumeric, jump to next iteration of loop
    if(/^[a-z0-9]+$/i.test(char) == false) continue;
    
    // creates entry if doesn't exist
    if(!obj[char]){
      obj[char] = 1
    // increment char count by 1
    }else{
      obj[char] ++
    }
    
  }
  
  for(let key in obj){
    if(obj[key]>1) count++
  }
    
  return count
}
