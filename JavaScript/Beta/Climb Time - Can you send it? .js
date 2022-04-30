function canClimb(ropeLength,climbHeight){
  if(typeof(ropeLength)!==`number` || typeof(climbHeight)!==`number`) return null
  return ropeLength > (climbHeight / 3.281) * 2
}
