var countSheep = function (n){
  let str = "";
  for(let i = 1; i <= n; i++) {
    str = str.concat(`${i} sheep...`)
  }
  return str;
}
