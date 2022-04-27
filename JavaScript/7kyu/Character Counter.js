function validateWord(s){
  return s.toLowerCase().length % new Set(s.toLowerCase()).size === 0
}
