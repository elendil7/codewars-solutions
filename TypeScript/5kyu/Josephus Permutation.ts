export const josephus = (items: any[], k: number): any[] => {
  let output = []
  let arrIndex = 0
  
  while(items.length > 0){    
    for(let i = 1; i <= k; ++i){
      // if reached 1 beyond the end of array (arr.length === arrIndex), reset to 0.
      if(arrIndex === items.length) arrIndex = 0;
      // upon reaching the next man (k), remove him from the array and add him to the output.
      // Also decrement arrIndex to compensate for 1 removed item from the array.
      if(i === k){
        output.push(items.splice(arrIndex, 1)[0])
        arrIndex--
      }
      // increment arrIndex by 1 (in advance of next iteration)
      arrIndex++
    }
  }
  
  return output
}
