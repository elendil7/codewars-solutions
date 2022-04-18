function nextItem(xs, item) {
  if(typeof(xs) == `object` && !Array.isArray(xs) && xs !== null){
    for(let i = 2; i <= 10000; ++i){
      if(xs.next().value === item){
        return xs.next().value
      }
    }
    return undefined
  }
  
  if(isNaN(xs) && !Array.isArray(xs) && typeof(xs) !== `string`) return undefined
  
  return xs.includes(item)?xs[xs.indexOf(item) + 1]:undefined
}
