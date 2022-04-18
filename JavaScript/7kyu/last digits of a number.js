function lastDigit(n, d) {
  if(d < 1) return []
  return [...``+n].map(v=>+v).slice(-d)
}
