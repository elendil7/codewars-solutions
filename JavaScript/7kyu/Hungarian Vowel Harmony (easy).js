function dative(word) {
  let frontVowels = `e, é, i, í, ö, ő, ü, ű` // -nek
  let backVowels = `a, á, o, ó, u, ú` // -nak
  
  for(let i = word.length - 1; i >= 0; --i){
    if(frontVowels.includes(word[i])){
      return word + `nek`
    }else if(backVowels.includes(word[i])){
      return word + `nak`
    }
  }
  
  return word
}
