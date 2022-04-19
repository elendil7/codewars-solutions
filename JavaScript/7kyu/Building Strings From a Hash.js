function solution(pairs){
  let result = []
  
  for(let key in pairs){
    result.push(`${key} = ${pairs[key]}`)
  }
    
  return result.join`,`
}
