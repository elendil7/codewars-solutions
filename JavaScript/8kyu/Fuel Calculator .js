function fuelPrice(litres, pricePerLitre) {
  let total = litres * pricePerLitre
  let multiplier
  
  console.log(litres, pricePerLitre)
  
  if(litres<=2){
    multiplier = 0
  }else if(litres<=4){
    multiplier = 0.05
  }else if(litres<=6){
    multiplier = 0.10
  }else if(litres<=8){
    multiplier = 0.20
  }else{
    multiplier = 0.25
  }
    
  total -= (litres * multiplier)
  
  return +total.toFixed(2)
}

fuelPrice=(l,p)=>+(l*p-l*(l>9?.25:l>7?.2:l>5?.15:l>3?.1:l>1?.05:0)).toFixed(2)
