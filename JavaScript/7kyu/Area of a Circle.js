var circleArea = function(radius) {
  if(radius < 1 || +radius !== radius) return false  
  return +(Math.PI * radius ** 2).toFixed(2)
}
