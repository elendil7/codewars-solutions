function sortCollection(arr){  
  if(arr===undefined) return undefined
  if(arr===null) return null
  if(!arr[0]) return []
  
  return arr.sort((a,b)=>a.rating==b.rating?(a.film).localeCompare(b.film):a.rating<b.rating)
}
