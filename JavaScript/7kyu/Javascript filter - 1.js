function searchNames( logins ){
  return logins.length<1?[]:logins.filter(v=>v[0][[v[0].length-1]] ==`_`?v:0).filter(v=>v)
}
