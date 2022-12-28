export function josephusSurvivor(n: number, k: number) {
  let items = [...Array(n)].map((v,i)=>++i)
  let arrIndex = 0
  
  while(items.length > 1){
    for(let i = 1; i <= k; ++i){
      if(arrIndex === items.length) arrIndex = 0
      if(i === k){
        items.splice(arrIndex, 1)
        arrIndex --
      }
      arrIndex ++
    }
  }
  
  return items[0]
}
