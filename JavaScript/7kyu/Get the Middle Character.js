function getMiddle(s){
  return s.length % 2 ?  s.charAt(s.length/2) : `${s.charAt((s.length/2)-1)}${s.charAt(s.length/2)}`
}
