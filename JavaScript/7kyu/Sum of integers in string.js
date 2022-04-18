function sumOfIntegersInString(s){
  let nums = []
  let temp = ``
  
  // get numbers
  for(let i=0; i<s.length; ++i){
    if(/\d/.test(s[i])){
      temp += s[i]      
      if(i === s.length-1){
        nums.push(+temp)
      }
    }else{
      nums.push(+temp)
      temp = ``
    }
  }
  
  return nums.reduce((a,b)=>a+b, 0)
}
