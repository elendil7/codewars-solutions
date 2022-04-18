function foldTo(distance, count) {
  if(distance < 0.0001){
    if(distance < 0){
      return null
    }else{
      return count || 0
    }
  }else{
    return foldTo(distance/2, !count?1:count+1)
  }
}

foldTo=(d,c)=>d<.0001?(d<0?null:c|0):foldTo(d/2,c?++c:1)
