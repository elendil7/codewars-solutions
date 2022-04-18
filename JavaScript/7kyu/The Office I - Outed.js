function outed(meet, boss){
  let total = 0
  
  for(let key in meet){
    if(key == boss){
      total+=meet[key]*2
    }else{
      total+=meet[key]
    }
  }
  
  return total / Object.keys(meet).length <= 5 ? `Get Out Now!` : `Nice Work Champ!`
}
