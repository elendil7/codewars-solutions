function validSpacing(s) {
  if(s.length === 0) return true
  let arr = s.split` `
  return (a=>a.length === arr.length)(arr.filter(v=>v))
}
