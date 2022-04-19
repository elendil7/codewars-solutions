function solve(arr){  
  let yesOrNo = `yes`
  let result = []
  
  for(let i = 0; i < arr.length; ++i){
    if(arr.slice(i+1).every(v=>arr[i]>v)){
      result.push(arr[i])
    }
  }
  
  return result
}
