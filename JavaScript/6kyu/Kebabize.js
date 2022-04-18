function kebabize(str) {
  str = str.replace(/[0-9]/g,``)
  let result = []
  let temp = ``
  
  for(let i=0; i<str.length; ++i){
    if(/[A-Z]/.test(str[i]) || i == str.length-1){
      result.push(temp)
      temp = ``
    }
    temp+=str[i].toLowerCase()
  }
  result[result.length-1] = result[result.length-1] + (v=>v.toUpperCase()==v?`-${v.toLowerCase()}`:v.toLowerCase())(str[str.length-1])
  
  return result.filter(v=>v!==``).join`-`
}
