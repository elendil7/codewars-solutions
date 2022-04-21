function killer(suspectInfo, dead) {
  for(let key in suspectInfo){
    if(dead.every(v=>suspectInfo[key].includes(v))) return key
  }
}
