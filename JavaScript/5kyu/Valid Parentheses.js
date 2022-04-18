function validParentheses(p) {
  let left = 0;
  let right = 0;
  for(let i = 0; i < p.length; i++){
    p.charAt(i) === ")" ? left++ : right++;
    if(left > right) return false;
  }
  if(left === right) return true;
  return false;
}
