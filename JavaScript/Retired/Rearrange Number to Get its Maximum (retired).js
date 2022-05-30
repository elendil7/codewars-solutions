var maxRedigit = function(num) {
  if(num < 100 || num > 999) return null
  return +[...``+num].sort((a,b)=>b-a).join("")
}
