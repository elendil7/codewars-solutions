function average(scores) {
  return Math.round(scores.reduce((a,b)=>a+b) / scores.length)
}
