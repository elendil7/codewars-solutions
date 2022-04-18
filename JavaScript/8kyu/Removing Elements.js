function removeEveryOther(a){
  // return a.filter(value => a.indexOf(value) % 2 == 0 ? value : null)
  let x = [];
  for(i = 0; i < a.length; i++){ if(i%2 != 0) continue; x.push(a[i]) }
  return x;
}
