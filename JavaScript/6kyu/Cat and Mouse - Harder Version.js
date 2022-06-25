function catMouse(x, j){
  if(x.replace(/[.]/g,"").length < 3) return "boring without all three"
  if(x.indexOf("C") > x.indexOf("m")) x = x.split("").reverse().join("")
  
  let dog = "no"
  
  if(x.slice(x.indexOf("C"), x.indexOf("m")).includes("D")) dog = "yes"
  
  if(Math.abs(x.indexOf("C") - x.indexOf("m")) <= j && dog === "no") return "Caught!"
  if(Math.abs(x.indexOf("C") - x.indexOf("m")) <= j && dog === "yes") return "Protected!"
  return "Escaped!"
}
