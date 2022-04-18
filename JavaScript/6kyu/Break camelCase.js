function solution(s) {
  if(s.length === 0) return "";
  let finalStr = "";
  for(let i = 0; i < s.length; i++){
    const char = s.charAt(i)
    if(char.toUpperCase() === char){
      finalStr = finalStr.concat(` ${char}`)
    } else {
      finalStr = finalStr.concat(char)
    }
  }
  return finalStr
}
