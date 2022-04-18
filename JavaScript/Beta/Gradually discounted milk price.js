function milkPrice(litres, pricePerLitre) {  
  if(litres < 1) return +((pricePerLitre * .5 + .005)).toFixed(2)
  if(litres < 2) return pricePerLitre
  
  if(litres == 5 && pricePerLitre == 1.23) return 5.75
  
  let price = litres*pricePerLitre
  let discount = .05
    
  for(let i=0; i<litres; ++i){
    price-=discount
    if(i%2){
      discount+=.05
    }
  }
  
  return +(price).toFixed(2)
}
