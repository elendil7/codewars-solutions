function encode(str,  n) {
  let a = `_abcdefghijklmnopqrstuvwxyz`
  return str.split``.map((v,i)=>a.toLowerCase().indexOf(v)+ +[...(``+n).repeat(str.length)][i])
}
