function nextHappyYear(year){
  for(let i=year+1; i<10e3; ++i){
    const currentYear = [...``+i]
    if(``+[...new Set(currentYear)] == ``+currentYear) return +currentYear.join``
  }
}
