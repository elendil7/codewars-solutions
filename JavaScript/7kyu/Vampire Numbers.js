var vampire_test = function(a, b){  
  let arr1 = [...`${a}${b}`].map(v=>+v).sort()
  let arr2 = [...`${a*b}`].map(v=>+v).sort()
  
  return arr1.join`` === arr2.join``
}
