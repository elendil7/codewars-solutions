function sameCase(a, b){
  if(/[a-z]/i.test(a)==!1||/[a-z]/i.test(b)==!1) return -1
  return (a.toUpperCase() === a && b.toUpperCase() === b) || (a.toLowerCase() === a && b.toLowerCase() === b) ? 1 : 0
}
