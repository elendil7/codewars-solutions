function find_average(a) {
  return a.length==0 ? 0 : a.reduce((a,b) => a+b)/a.length
}
