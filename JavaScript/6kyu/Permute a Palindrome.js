function permuteAPalindrome (input) { 
  input = input.toLowerCase()
  
  let obj = {}
  let count = 0
  
  for(let i = 0; i < input.length; ++i){
    if(!obj[input[i]]) obj[input[i]] = 1
    else obj[input[i]] ++
  }
  
  for(let key in obj){
    if(obj[key] % 2) count ++
  }
  
  return count < 2
}
