function closeCompare(a, b, margin){  
  if(!margin) return a-b
  
  if(Math.abs(a-b) <= margin){
    return 0
  }else if(a<b){
    return -1
  }else if(a>b){
    return 1
  }
}
