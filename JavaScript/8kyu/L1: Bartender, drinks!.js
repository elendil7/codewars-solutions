function getDrinkByProfession(param){
  let obj = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal",
  }
  return obj[param.toLowerCase()] || "Beer"
}
