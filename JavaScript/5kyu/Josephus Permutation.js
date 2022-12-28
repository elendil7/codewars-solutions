function josephus(items,k){
  let permutation = []
  let arrIndex = 0
  
  while(items.length > 0){
    for(let i = 1; i <= k; ++i){
      if(arrIndex === items.length) arrIndex = 0
      if(i === k){
        permutation.push(items.splice(arrIndex, 1)[0])
        arrIndex --
      }
      arrIndex ++
    }
  }
  
  return permutation
}
