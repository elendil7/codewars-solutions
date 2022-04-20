function anagrams(word, words) {
  return words.map(v=>[...word].sort((a,b)=>a.localeCompare(b)).join`` === [...v].sort((a,b)=>a.localeCompare(b)).join`` ? v : ``).filter(v=>v)
}
