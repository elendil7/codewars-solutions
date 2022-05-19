function replaceAll(seq, find, replace) {
  if(Array.isArray(seq)) return seq.map(v=>v==find?replace:v)
  else return [...seq].map(v=>v==find?replace:v).join("")
}
