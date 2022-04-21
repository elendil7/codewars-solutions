function numberJoy(n) {
  let num = [...``+n].reduce((a,b)=>+a + +b,0)
  let reversedNum = +[...``+num].reverse().join``
  
  return n === num * reversedNum
}
