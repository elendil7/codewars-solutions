var ownedCatAndDog = function(catYears, dogYears) {
  let catSum = 0
  let dogSum = 0
  
  while(catYears > 0){
    if(catSum == 0){
      catYears -= 15
      if(catYears >= 0){
        catSum++
      }
    }else if(catSum == 1){
      catYears -= 9
      if(catYears >= 0){
        catSum++
      }
    }else{
      catYears -= 4
      if(catYears >= 0){
        catSum++
      }
    }
  }
  
  while(dogYears > 0){
    if(dogSum == 0){
      dogYears -= 15
      if(dogYears >= 0){
        dogSum++
      }
    }else if(dogSum == 1){
      dogYears -= 9
      if(dogYears >= 0){
        dogSum++
      }
    }else{
      dogYears -= 5
      if(dogYears >= 0){
        dogSum++
      }
    }
  }
  
  return [catSum, dogSum]
}
