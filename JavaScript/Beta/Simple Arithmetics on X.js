function calc(x){
  let arr = [...``+x]
  return (x * arr.reduce((a,b)=>+a + +b,0)) - (+arr.reverse().join``)
}

calc=(x)=>0
