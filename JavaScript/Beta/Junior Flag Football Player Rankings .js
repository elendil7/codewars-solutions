function rankPlayers(players) {
  let arr = []
  let obj = {}
  
  for(let key in players){
    const t = players[key]
    arr.push([key, (t.speed + t.agility + t.quickness) / 3])
  }
  
  for(let i = 0; i < arr.sort((a,b)=>b[1]-a[1]).length; ++i){
    obj[arr[i][0]] = +arr[i][1].toFixed(2)
  }
  
  return obj
}
