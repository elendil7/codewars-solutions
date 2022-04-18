function simpleTransposition(text) {
  let row1 = []
  let row2 = []
  
  for(let i = 0; i < text.length; ++i){
    if(i%2 == 0){
      row1.push(text[i])
    }else{
      row2.push(text[i])
    }
  }
  
  return row1.concat(row2).join``
}
