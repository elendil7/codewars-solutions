function unluckyDays(year){  
  let date = new Date(year, 0, 1, 0, 0, 0, 0)
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  let count = 0
  
  for(let i = 0; i < 365; ++i){
    if(days[date.getDay()] == `Friday` && date.getDate() == 13){
      count ++
    }
    date.setDate(date.getDate() + 1)
  }
  
  return count
}
