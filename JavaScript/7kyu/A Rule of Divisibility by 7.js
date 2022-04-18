function seven(m, count) {
  if(count==undefined) count = 0
  
  if((m%7==0 && (``+m).length<3) || (``+m).length < 3){
    return [m, count]
  }else{
    return seven( +(``+m).slice(0,-1) - (+(``+m).slice(-1)*2) , count+1)
  }
}
