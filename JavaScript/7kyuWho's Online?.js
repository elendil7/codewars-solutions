const whosOnline = (friends) => {
  let obj = {
    "online": [],
    "offline": [],
    "away": []
  }
  
  for(let key in friends){
    if(friends[key].lastActivity > 10 && friends[key].status == "online") obj["away"].push(friends[key].username)
    else obj[friends[key].status].push(friends[key].username)
  }
  
  for(let key in obj){
    if(obj[key].length < 1) delete obj[key]
  }
  
  return obj
}
