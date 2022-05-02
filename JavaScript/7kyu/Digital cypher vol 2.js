function decode  (code, n) {
  let alphabet = `_abcdefghijklmnopqrstuvwxyz`.repeat(code.length)  
  let str = (``+n).repeat(code.length)
  
  return code.map((v,i)=>alphabet[v-+str[i]]).join``
}
