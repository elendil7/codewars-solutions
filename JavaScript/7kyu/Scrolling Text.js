function scrollingText(text){
  text = text.toUpperCase()
  let res = []
  
  for(let i = 0; i < text.length; ++i){
    res.push(text.slice(i) + text.slice(0, i))
  }
  
  return res
}
