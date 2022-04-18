function daysUntilChristmas(date) {  
  let daysTillXmas = 0

  // for days just over a year
  for(let i = 0; i < 370; ++i){
    // if day and month align with Christmas, return count (days till xmas)
    if(date.getUTCDate() === 25 && date.getUTCMonth() === 11){
      return daysTillXmas
    }
    // increment count
    daysTillXmas ++
    // add 1 day to date
    date.setDate(date.getDate() + 1)
  }
  
  return daysTillXmas
}
