const tastiest = (recipes) => {
  return `The recipe at index ${recipes.indexOf([...recipes].sort((a,b)=>b.veg.length-a.veg.length)[0])} is the tastiest!!!`
}
