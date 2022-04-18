function wordsToMarks(s){
  return s.split(``).map(v=>`#abcdefghijklmnopqrstuvwxyz`.indexOf(v)).reduce((a,b)=>a+b)
}
