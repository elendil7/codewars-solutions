function squareDigits(n){
  let r = "";
  [...(n.toString())].forEach((num) => r=`${r}${Math.pow(num, 2)}`)
  return parseInt(r);
}

function squareDigits(n){
  return parseInt(n.toString().split("").map(a => a*a).join(""))
}
