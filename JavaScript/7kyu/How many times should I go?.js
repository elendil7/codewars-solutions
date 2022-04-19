function howManyTimes(annualPrice, individualPrice, currentPrice, count) {
  if(individualPrice === 0) return Infinity
  
  if(currentPrice == undefined) currentPrice = 0
  if(count == undefined) count = 0
  
  if(annualPrice <= currentPrice){
    return count
  }else{
    return howManyTimes(annualPrice, individualPrice, currentPrice + individualPrice, count + 1)
  }
}
