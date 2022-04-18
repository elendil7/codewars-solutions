var paintLetterboxes = function(start, end) {
  let arr = [...Array(++end)].map((v,i)=>i).slice(start).join``.split``
  let result = []
  
  for(let i=0; i<10; ++i){
    result.push(arr.filter(v=>v==i).length)
  }
  
  return result
}
