function timeConvert(num) { 
  if(num < 1) return "00:00"
  
  let h = ``+(~~(num/60))
  let m = ``+(num % 60)
  
  return `${h.length<2?"0":""}${h}:${m.length<2?"0":""}${m}`
}
