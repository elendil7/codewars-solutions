function mean(lst){
  return (a=>[a.reduce((a,b)=>+a + +b, 0) / a.length, lst.filter(v=>/[a-z]/i.test(v)).join``]) (lst.filter(v=>/\d/.test(v)))
}
