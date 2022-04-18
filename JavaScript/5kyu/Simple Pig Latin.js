function pigIt(str){
  let words = str.split(" ")
  let result = []
  
  for(let i = 0; i < words.length; i++){
    let currentWord = words[i]
    if(/[a-z]/ig.test(currentWord)){
      result.push(`${currentWord.slice(1)}${currentWord.slice(0,1)}ay`)
    }else{
      result.push(currentWord)
    }
  }
  
  return result.join(" ");
}
