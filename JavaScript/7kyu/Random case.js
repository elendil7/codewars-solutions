function randomCase(x) {
  return x.split("").map((v,i)=>Math.random() < 0.5 ? v.toUpperCase() : v.toLowerCase()).join("")
}
