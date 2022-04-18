function stringTransformer(str) {
  return str.split` `.reverse().map(x=>[...x].map(v=>v==v.toUpperCase()?v.toLowerCase():v.toUpperCase()).join``).join` `
}
