function sumDigPow(a, b) {
  console.log(a, b)
  let result = []
  for(let i = a; i <= b; i++){
    if(i < 10){
      result.push(i)
    }else if(i.toString().split("").map((v,i)=>Math.pow(parseInt(v), i+1)).reduce((a,b)=>a+b) === i){
      result.push(i)
    }
  }
  return result;
}
