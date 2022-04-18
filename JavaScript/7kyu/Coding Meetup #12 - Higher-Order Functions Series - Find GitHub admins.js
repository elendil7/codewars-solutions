function findAdmin(list, lang) {
  for(let key in list){
    if(list[key].githubAdmin == `no` || list[key].language != lang){
      delete list[key]
    }
  }
  
  return list.filter(v=>v)
}
