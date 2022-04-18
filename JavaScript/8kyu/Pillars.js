function pillars(pillars, dist, width) {  
  if(pillars < 2) return 0
  let result = 0
  result += (--pillars) * (dist*100 + width) - width
  return result
}

pillars=(p,d,w)=>p<2?0:--p*(d*100+w)-w
