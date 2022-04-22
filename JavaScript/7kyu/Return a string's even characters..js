function evenChars(str) {
  if(!str[1] || str[100]) return `invalid string`
  return [...str].filter((v,i)=>i%2)
}
