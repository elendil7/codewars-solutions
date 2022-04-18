function bingo(ticket, win){
  let total = 0
  
  for(let i = 0; i < ticket.length; ++i){
    for(let x = 0; x < ticket[i][0].length; ++x){
      if(ticket[i][0][x].charCodeAt() === ticket[i][1]){
        total ++
        break
      }
    }
  }
  
  return total >= win ? `Winner!` : `Loser!`
}
