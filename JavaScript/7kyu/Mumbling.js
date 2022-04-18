function accum(s) {
  let str = "";
  for(let i=0;i<s.length;i++) str = str.concat(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i) + "-");
  return str.slice(0, -1);
}
