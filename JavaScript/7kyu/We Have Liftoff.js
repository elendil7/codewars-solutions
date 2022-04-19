function liftoff(instructions){
  return instructions.sort((a,b)=>b-a).join` ` + ` liftoff!`
}
