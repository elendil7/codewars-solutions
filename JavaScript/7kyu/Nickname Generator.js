function nicknameGenerator(name){
  if(!name[3]) return `Error: Name too short`
  
  if(/[aeiou]/i.test(name[2]) == false){
    return name.slice(0, 3)
  }else{
    return name.slice(0, 4)
  }
}
