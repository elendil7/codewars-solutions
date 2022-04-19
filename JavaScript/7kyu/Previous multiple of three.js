const prevMultOfThree = n => {
  if(n % 3 === 0) return n
  let arr = [...``+n]
  
  while(arr.length > 0){
    arr.pop()
    if(parseInt(arr.join``) % 3 === 0){
      return parseInt(arr.join``)
    }
  }
  
  return null
}
