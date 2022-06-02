function orderWord(s){
  return !s || s.length < 1 ? "Invalid String!" : [...s].sort().join("")
}
