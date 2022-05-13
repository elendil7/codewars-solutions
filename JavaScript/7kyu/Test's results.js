function testResult(arr) {
  let obj = {"h":0,"a":0,"l":0}
  
  arr.map(v=>v<7?obj["l"]++:v<9?obj["a"]++:obj["h"]++)
  
  let res = [+(arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(3), obj]
  
  if(obj["l"]<1&&obj["a"]<1) res.push("They did well")
  
  return res
}
