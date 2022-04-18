function scoreOfDive(scores, tariff) {
  scores.sort((a,b)=>a-b)
  
  scores.pop()
  scores.pop()
  
  scores.sort((a,b)=>b-a)
  
  scores.pop()
  scores.pop()
  
  return (scores.reduce((a,b)=>a+b,0) * tariff).toFixed(2)
}
