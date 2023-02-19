function addAll(numbers) {
  console.log("---------------------------------------------")
  
  numbers.sort((a,b)=>a-b)
  
  let total = 0
  
  while(numbers.length > 1){
    numbers[1] = numbers[0] + numbers[1]
    
    total += numbers[1]
    numbers.shift()
    numbers.sort((a,b)=>a-b)
    
    console.log(numbers)
    console.log(total)
  }
  
  return total
}

addAll=(n,t=0,s=n=>n.sort((a,b)=>a-b))=>{
  while(s(n)[1]){
    n[1]=n[0]+n[1]
    t+=n[1]
    s(n).shift()
  }
  return t
}
