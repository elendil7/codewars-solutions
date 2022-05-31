function arr2bin(arr){
  return arr.filter(v=>typeof(v)!="number").length>0 ? !1 : (arr.reduce((a,b)=>a+b,0)).toString(2)
}
