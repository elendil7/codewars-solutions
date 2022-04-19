function riders(stations) {
  let miles = 0
  let count = 1
  
  for(let i = 0; i < stations.length - 1; ++i){
    miles += stations[i]
    if(miles + stations[i + 1] > 100){
      count ++
      miles = 0   
    }
  }
  
  return count
}
