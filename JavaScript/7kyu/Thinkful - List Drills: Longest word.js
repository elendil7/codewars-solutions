function longest(words) {
  return [...words].sort((a,b)=>b.length-a.length)[0].length
}
