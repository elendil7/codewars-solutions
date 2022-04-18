function stringMerge(str1, str2, char){
  let regex = new RegExp(char)
  let slicedStr2
  
  for(let i = 0; i < str2.length; ++i){
    if(str2[i] == char){
      slicedStr2 = str2.slice(i+1)
      break
    }
  }  
      
  return str1.split(regex)[0] + char + slicedStr2
}
