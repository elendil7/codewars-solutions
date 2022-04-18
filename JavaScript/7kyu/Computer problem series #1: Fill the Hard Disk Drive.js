function save(sizes, hd) {
  let count = 0
  
  for(let i = 0; i < sizes.length; ++i){
    if(sizes.slice(0,i+1).reduce((a,b)=>a+b,0) <= hd) count ++
  }
  
  return count
}
