function caffeineBuzz(n){
  if(n%3!==0) return `mocha_missing!`
  
  let str = ``
  
  if(n%3==0 && n%4==0) str += `Coffee`
  else if(n%3==0) str += `Java`
  
  if((n%3==0 || n%4==0) && n%2 == 0) return str += `Script`
  
  return str
}
