String.prototype.ipv4Address=function(){
  let arr = this.split(`.`)
  
  if(arr.every(v=>+v<256 && (v[0]!=0 || v.length < 2) && v)){

    for(let i = 0; i < arr.length; ++i){
      if(/\n/i.test(arr[i]) || arr[i].trim() !== arr[i] || arr[i] < 0 || arr[i][0] == `+`) return false
    }

    if(arr.length === 4) return true
    
    return false 
  }
  
  return false
}
