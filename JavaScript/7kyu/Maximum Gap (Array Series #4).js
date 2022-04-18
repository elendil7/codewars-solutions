function maxGap (numbers){  
  let max = 0
  
  for(let i=0; i<numbers.sort((a,b)=>a-b).length-1; ++i){
    max = Math.max(max, Math.abs(numbers[i] - numbers[i+1]))
  }
  
  return max
}
