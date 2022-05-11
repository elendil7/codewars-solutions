function singleDigit(n) {
  if((``+n).length == 1){
    return n
  }else{
    return singleDigit(+[...n.toString(2)].reduce((a,b)=>+a + +b,0))
  }
}
