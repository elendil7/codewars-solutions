function isPangram(s){
  console.log(s)
  return (s.match(/([a-z])(?!.*\1)/gi) || []).length == 26
}
