function lowercaseCount(s){
  return s.replace(/[a-z]/g, `¬`).split(``).filter(v=>v==`¬`).length
}
