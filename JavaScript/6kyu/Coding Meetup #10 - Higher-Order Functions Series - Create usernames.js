function addUsername(list) {
  for(let key in list){
    let cur = list[key]
    let username = `${cur.firstName.toLowerCase()}${cur.lastName[0].toLowerCase()}${new Date().getFullYear()-cur.age}`
    list[key].username = username
  }
  
  return list
}
