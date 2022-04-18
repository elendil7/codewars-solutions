function sevenAte9(str){
  let arr = str.split``
  return arr.map((v,i)=>v!=9?v:arr[i-1]==7&&arr[i+1]==7?``:v).join``
}
