function logicalCalc(arr, op){
  if(op === `AND`){
    if(arr.includes(!0) && arr.includes(!1)) return false
    if(!arr.includes(!0)) return false
    return true
  }else if(op === `OR`){
    if(!arr.includes(!0)) return false
    return true
  }else{
    return arr.reduce((a,b)=>(x=>x==1?!0:!1)(a^b))
  }
}
