function sumFromString(str){
  return str.split(/[a-z+?!*!&=-_-\\",^£%$" ]/ig).reduce((a,b)=>+a + +b, 0)
}
