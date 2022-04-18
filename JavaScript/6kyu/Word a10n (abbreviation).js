function abbreviate(str) {  
  let arr = str.split(/ |-/)
  let separators = [``].concat([...str].filter(v=>v==`-`||v==` `))
  let result = [], temp
  
  for(i=0; i<arr.length; ++i){
    if(arr[i].length>3){
      if(arr[i].includes(`,`)){
        temp = arr[i].slice(0,-1)
        result.push(`${separators[i]}${temp[0]}${temp.length-2}${temp[temp.length-1]},`)
      }else{
        result.push(`${separators[i]}${arr[i][0]}${arr[i].length-2}${arr[i][arr[i].length-1]}`)        
      }
    }else{
      result.push(`${separators[i]}${arr[i]}`)
    }
  }
  
  return result.join``
}
