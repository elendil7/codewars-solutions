function compose(s1, s2) {
  let a1 = s1.split("\n")
  let a2 = s2.split("\n")
  
  let res = []
  
  for(let i = 0; i < a1.length; ++i){
    res.push(a1[i].slice(0,i+1) + a2[a2.length-i-1].slice(0,a2.length-i))
  }
  
  return res.join("\n")
}
