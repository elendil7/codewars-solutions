function none(arr, fun){
  return arr.every(v=>!fun(v))
}
