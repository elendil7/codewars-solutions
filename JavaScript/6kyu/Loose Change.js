function looseChange(cents){
  // get least quantity of coins that make up the input (cents) number
  // Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢)
  
  cents = ~~cents
  
  let obj = {
    "Nickels": 0,
    "Pennies": 0,
    "Dimes": 0,
    "Quarters": 0
  }
  
  while(cents > 0){
    if(cents >= 25){
      obj["Quarters"] ++
      cents -= 25
    }else if(cents >= 10){
      obj["Dimes"] ++
      cents -= 10
    }else if(cents >= 5){
      obj["Nickels"] ++
      cents -= 5
    }else{
      obj["Pennies"] ++
      cents -= 1
    }
  }
  
  return obj
}
