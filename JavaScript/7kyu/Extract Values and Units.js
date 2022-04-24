function valAndUnits(s) {
  s = s.replace(/ /g,``)
  
  let val = ``, units = ``
  
  for(let i = 0; i < s.length; ++i){
    if(/\d/.test(s[i]) || `.-`.includes(s[i])) val += s[i]
    else units += s[i]
  }
  
  return {val: +val, units: units}
}
