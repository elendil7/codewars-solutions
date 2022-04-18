stockList=(listOfArt, listOfCat)=>{
  if(!listOfArt[0] || !listOfCat[0]) return ``
  
  let result = []
  
  for(let i=0; i<listOfCat.length; ++i){
    result.push(`(${listOfCat[i]} : ${listOfArt.filter(v=>v[0] == listOfCat[i]).map(v=>v.split` `[1]).reduce((a,b)=>+a+ +b,0)})`)
  }
  
  return result.join` - `
}
