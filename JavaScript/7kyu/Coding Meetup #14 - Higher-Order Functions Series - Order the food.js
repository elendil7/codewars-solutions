function orderFood(list) {
  let final = {}
  
  for(let key in list){
    if(!final[list[key].meal]){
      final[list[key].meal] = 1
    }else{
      final[list[key].meal] ++
    }
  }
    
  return final
}
