function getAverage(marks){
  return ~~(marks.reduce((a,b)=>a+b,0)/marks.length)
}
