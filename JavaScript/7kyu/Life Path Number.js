function lifePathNumber(dateOfBirth) {
  if(dateOfBirth.length > 1){
    return lifePathNumber(``+[...``+dateOfBirth].filter(v=>/\d/.test(v)).reduce((a,b)=>+a + +b, 0))
  }else{
    return +dateOfBirth
  }
}
