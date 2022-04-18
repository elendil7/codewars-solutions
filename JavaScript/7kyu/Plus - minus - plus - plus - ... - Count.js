const catchSignChange = arr => {
  let count = 0
  
  for(let i = 0; i < arr.length-1; ++i){
    if(arr[i]>=0 && arr[i+1]<0){
      count++
    }else if(arr[i]<0 && arr[i+1]>=0){
      count++
    }
  }
  
  return count
}
