function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice*(discount/100)))
}
