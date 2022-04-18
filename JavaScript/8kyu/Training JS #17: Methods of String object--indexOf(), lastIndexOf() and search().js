function firstToLast(str,c){
  return !str.includes(c) ? -1 : str.lastIndexOf(c) - str.indexOf(c)
}
