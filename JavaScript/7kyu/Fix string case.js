function solve(s){
  let countLower = 0;
  let countUpper = 0;
  s.split("").map(v=>v.toUpperCase()==v?countUpper++:countLower++)
  if(countLower == countUpper){
    return s.toLowerCase()
  }else if(countLower > countUpper){
    return s.toLowerCase()
  }else{
    return s.toUpperCase()
  }
}
