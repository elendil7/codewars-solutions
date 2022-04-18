function averageFemale(list){
  let results = [0, 0]
  
  for(let key in list){
    if(list[key].gender === `female`){
      results[0] += list[key].age
      results[1] ++
    }
  }
  
  return results[0] / results[1] || 0
}
