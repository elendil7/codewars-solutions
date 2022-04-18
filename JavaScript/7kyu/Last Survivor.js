function lastSurvivor(letters, coords) {
  let lettersArray = letters.split``
  
  while(coords.length > 0){
    lettersArray.splice(coords[0], 1)
    coords.shift()
  }
  
  return lettersArray.join``
}
