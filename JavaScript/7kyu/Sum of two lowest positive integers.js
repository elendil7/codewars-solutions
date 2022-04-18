function sumTwoSmallestNumbers(n) {  
  return n.sort((a,b) => a-b).slice(0,2).reduce((a,b) => a+b);
}
