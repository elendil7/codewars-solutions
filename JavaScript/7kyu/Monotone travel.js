var isMonotone = function(arr){
  return arr.every((v,i,a)=>i<1||i-1==a.length?true:v>=a[i-1]?true:false)
}
