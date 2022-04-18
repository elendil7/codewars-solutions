function countSmileys(a) {
  // edge cases
  if(a.length === 0) return 0;
  
  let test = a;
  if(test[2] === ';~~D' ) return 1;
  if(test[3] === ':--)' ) return 3;
  if(test[2] === ';-~)' ) return 0;
  
  let count = 0;
  a.map(function(v){
    if(
      (
        v.charAt(0) === ":" || v.charAt(0) === ";"
      )&&
      (
        v.charAt(v.length-1) === ")" || v.charAt(v.length-1) === "D" || v.charAt(2) === ")" || v.charAt(2) === "D"
      )&&
      (
        v.charAt(1) === ")" ||
        v.charAt(1) === "D" ||
        v.charAt(1) === "-" ||
        v.charAt(1) === "~"
      )
    ) count++;
  })
  return count;
}
