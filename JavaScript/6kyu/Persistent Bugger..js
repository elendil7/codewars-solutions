const persistence = (n) => {
  let count = 0;
  
  function getDigit(num){
    let test = num.toString().split("").reduce((a,b) => a*b)
    if(test.length === 1) return;
    count++
    // recurse
    getDigit(test);
  }
  getDigit(n)
  return count;
}
