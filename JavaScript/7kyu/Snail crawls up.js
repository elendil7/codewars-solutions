function snail(column, day, night) {
  let pos = 0
  let days = 0
  
  while(pos < column){
    pos += day
    days ++
    if(pos >= column) return days
    pos -= night
  }
  
  return days
}
