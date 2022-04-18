function compare(s1, s2) {
  if(/\d/.test(s1) || !s1) s1 = ``
  if(/\d/.test(s2) || !s2) s2 = ``
  
  return s1.toUpperCase().split``.map(v=>/[A-Z]/.test(v)?v.charCodeAt():0).reduce((a,b)=>a+b,0) == s2.toUpperCase().split``.map(v=>/[A-Z]/.test(v)?v.charCodeAt():0).reduce((a,b)=>a+b,0)
}
