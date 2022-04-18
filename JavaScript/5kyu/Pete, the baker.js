function cakes(recipe, available) {
  let results = []
  
  for(const key in recipe){
    if(!available[key]) return 0;
    results.push(Math.floor(available[key]/recipe[key]))
  }

  return Math.min(...results)
}
