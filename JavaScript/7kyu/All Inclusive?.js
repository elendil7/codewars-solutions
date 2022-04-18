function containAllRots(str, arr) {
  let rotations = []
  
  // get all rotations of string
  for(let i = 0; i < str.length; ++i){
    rotations.push(str.slice(i) + str.slice(0, i))
  }
  
  // check if provided array (arr) has every rotation of string (str), by parsing through rotations array.
  for(let i = 0; i < rotations.length; ++i){
    if(!arr.includes(rotations[i])){
      return false
    }
  }
  return true
}
