function isOpposite(s1,s2){
  console.log(s1,s2)
  return [...s1]
  .map(v=>v.toUpperCase()===v?v.toLowerCase():v.toUpperCase()).join("") === s2 && s1.length > 0
}
