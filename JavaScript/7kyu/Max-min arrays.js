function solve(arr){
  let i = 0
  let result = []
  
  while(arr.sort((a,b)=>b-a)[0]){
    if(i % 2 === 0){
      result.push(arr.shift())
    }else{
      result.push(arr.pop())
    }
    i ++
  }
  
  return result
}
