function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  let p = principal;
  while(p < desired){
    p = p + ((p*interest) - (p*interest*tax));
    years++
  }
  return years; 
}
