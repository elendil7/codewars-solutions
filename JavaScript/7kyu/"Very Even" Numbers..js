function isVeryEvenNumber(n) {
  if((``+n).length==1) return n%2==0
  return isVeryEvenNumber([...``+n].reduce((a,b)=>+a + +b,0))
}
