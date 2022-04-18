function threeInOne(arr){
  let temp = []
  let res = []
  
  for(let i=0; i<arr.length; ++i){
    temp.push(arr[i])
    if((i+1)%3==0 || i==arr.length-1){
      res.push(temp.reduce((a,b)=>a+b,0))
      temp = []
    }
  }
  
  return res
}
