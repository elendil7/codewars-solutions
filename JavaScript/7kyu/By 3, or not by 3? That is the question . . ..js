function divisibleByThree(str){
  return (x=>x==~~x)([...str].reduce((a,b)=>+a + +b, 0)/3)
}
