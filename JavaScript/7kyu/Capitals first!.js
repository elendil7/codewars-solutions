function capitalsFirst(str){
  let arr = str.split(" ")
  let res = []
  
  for(let i = 0; i < arr.length; ++i){
    if(/[a-z]/i.test(arr[i][0])){
      if(arr[i][0].toUpperCase() === arr[i][0]) res.push(arr[i])
    }
  }
  for(let i = 0; i < arr.length; ++i){
    if(/[a-z]/i.test(arr[i][0])){
      if(arr[i][0].toLowerCase() === arr[i][0]) res.push(arr[i])
    }
  }
  
  return res.join(" ")
  
}
