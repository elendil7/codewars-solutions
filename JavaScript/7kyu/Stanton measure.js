function stantonMeasure(arr){
  return arr.filter(v=>v==arr.filter(v=>v==1).length).length
}
