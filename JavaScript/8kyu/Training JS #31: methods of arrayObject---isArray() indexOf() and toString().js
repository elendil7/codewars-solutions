function blackAndWhite(arr){
  if(!Array.isArray(arr)) return "It's a fake array"
  if(arr.includes(5)&&arr.includes(13)) return "It's a black array"
  return "It's a white array"
}
