function infiniteLoop(arr,d,n){  
  let newArr = [].concat(...arr)
  let lengths = arr.map(v=>v.length)
  let count = 0
  let temp = []
  let result = []
  
  for(let i=0; i<n; ++i){
    if(d==`left`){
      newArr.push(newArr.shift())
    }else{
      newArr.unshift(newArr.pop())
    }
  }
  
  for(let i=0; i<newArr.length; ++i){
    temp.push(newArr[i])
    if(i == lengths[0] + count - 1){
      count += lengths[0]
      result.push(temp)
      lengths.shift()
      temp = []
    }
  }
  
  return result
}
