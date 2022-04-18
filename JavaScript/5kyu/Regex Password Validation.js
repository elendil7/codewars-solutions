function validate(p) {
  if(p.length < 6) return false;
  
  let containsLowerCase = false;
  let containsUpperCase = false;
  let containsNumber = false;
  
  for(let i = 0; i < p.length; i++){
    console.log(p[i])
    if(/[a-z]/.test(p[i])) containsLowerCase = true;
    else if(/[A-Z]/.test(p[i])) containsUpperCase = true;
    else if(/[0-9]/.test(p[i])) containsNumber = true;
    else return false
  }
  
  return containsLowerCase==true&&containsUpperCase==true&&containsNumber==true?true:false
}
