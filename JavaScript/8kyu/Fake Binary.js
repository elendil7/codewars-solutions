function fakeBin(x){
  return x.split("").map(v=>v<5?"0":"1").join("")
}
