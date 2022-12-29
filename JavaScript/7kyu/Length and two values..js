function alternate(n, firstValue, secondValue){
  return [...Array(n)].map((v,i)=>i%2?secondValue:firstValue)
}
