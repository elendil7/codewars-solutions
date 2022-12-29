function makeValley(arr) {
  const arrLength = arr.length
  const mid = ~~(arrLength / 2)
  
  // sort array once (descending order)
  arr.sort((a,b)=>b-a)
  
  let left = [], right = []
  
  for(let i = 0; i < arr.length; ++i){
    // start with left wing
    if(i % 2 === 0){
      left.push(arr[i])
    }
    // then do right wing on every other iteration
    else{
      right.unshift(arr[i])
    }
  }

  return left.concat(right)
}
