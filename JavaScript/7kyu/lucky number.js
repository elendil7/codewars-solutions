function isLucky(n) {
  return (a=>a==0||n%9==0)([...``+n].reduce((a,b)=>a+b,0))
}
