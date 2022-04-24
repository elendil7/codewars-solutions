function computeDepth (x){
  let existed = {
    "0": "no",
    "1": "no",
    "2": "no",
    "3": "no",
    "4": "no",
    "5": "no",
    "6": "no",
    "7": "no",
    "8": "no",
    "9": "no"
  }
  let count = 0
  
  for(let i = 1; i <= 100000; ++i){
    count ++
    let arr = [...``+(i*x)]
    for(let i = 0; i < arr.length; ++i){
      existed[arr[i]] = `yes`
    }
    if(Object.values(existed).every(v=>v===`yes`)) return count
  }
}
