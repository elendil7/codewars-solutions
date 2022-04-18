function solve(str){  
  let reversedStringNoSpaces = [...str.replace(/\s/g,``)].reverse().join``
  let finalStr = ``
  let incrementer = 0
  
  for(let i=0; i<str.length; ++i){
    if(str[i] === ` `){
      finalStr += ` `
      incrementer ++
    }else{
      finalStr += reversedStringNoSpaces[i-incrementer] || `` 
    }
  }
    
  return finalStr
}
