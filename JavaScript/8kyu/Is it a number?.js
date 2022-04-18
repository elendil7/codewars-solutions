function isDigit(s) {
  console.log(s)
  
  if(s == " " || !s) return false
  
  return Number(s)==s
  
  return ~~s&s>0
}

isDigit=s=>{
  console.log(s)
  return +s==s&&!!s&&s!=" "
}

isDigit=s=>+s==s&&!!s&&s!=` `

isDigit=s=>+s==s&&!!s&&s!=` `
