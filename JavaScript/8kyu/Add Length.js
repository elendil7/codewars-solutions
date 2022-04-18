function addLength(str) {
  return str.split(" ").map(v=>`${v} ${v.length}`)
}
