function abbrevName(n){
  return n.split(" ").map(v => v.slice(0,1).toUpperCase()).join(".")
}
