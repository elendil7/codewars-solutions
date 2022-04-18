function autocomplete(input, dictionary){
  let result = []
  
  for(let i=0; i<dictionary.length; ++i){
    if(dictionary[i].toLowerCase().startsWith([...input].filter(v=>/[a-z]/ig.test(v)).join``)){
      result.push(dictionary[i])
    }
  }
  
  return result.length<5?result:result.slice(0, 5)
}
