function add(first, second) {
var sum = '';
  var carry = 0;
  var diff = second.length - first.length;
  for (i = first.length - 1; i >= 0; i--) {
    var temp =
      (Number(first.charAt(i)) % 10) +
      (Number(second.charAt(i + diff)) % 10) +
      carry;
    if (temp >= 10) {
      sum = (temp % 10) + sum;
      carry = Math.floor(temp / 10);
    } else {
      sum = temp + sum;
      carry = 0;
    }
  }
  if (carry) {
    sum = carry + sum;
  }
  return sum;
}

add=(a,b)=>{
  let z=[``,0,a.length]
  for(i=z[2]-1;i>=0;i--){
    var t=a.charAt(i)%10+b.charAt(i+b.length-z[2])%10+z[1]
    z=[t>=10?t%10+z[0]:t+z[0],t>=10?0|t/10:0,z[2]]
  }
  return z[1]?z[1]+z[0]:z[0]
}
