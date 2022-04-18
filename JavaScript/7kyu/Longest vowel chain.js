function solve(s){  
  let arr = s.split``
  let count = 0, tempCount = 0
  
  arr.map(v=>{
    if(/[aeiou]/i.test(v)){
      tempCount++
    }else{
      count = Math.max(count, tempCount)
      tempCount = 0
    }
  })
  
  return count
}
