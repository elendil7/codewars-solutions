function sortArray(arr) {  
  let oddNumsSorted = arr.filter(v=>v%2).sort((a,b)=>a-b)
    
  let res = []
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2){
      res.push(oddNumsSorted.shift())
    }else{
      res.push(arr[i])
    }
  }
  
  return res
}

sortArray=a=>(x=a.filter(v=>v%2).sort((a,b)=>b-a))?a.map(v=>v%2?x.pop():v):y̶̨̨̧̠̹̮͖̝̝̯͈̜̓̈́͒̉̔̈̿̈́͊̕̚͠͠

sortArray=(a,x=a.filter(v=>v%2).sort((a,b)=>b-a))=>a.map(v=>v%2?x.pop():v)
