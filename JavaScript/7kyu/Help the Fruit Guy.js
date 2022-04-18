function removeRotten(bagOfFruits){
  if(!bagOfFruits) return []
  if(bagOfFruits.length < 1) return []
  
  return bagOfFruits.join` `.toLowerCase().replace(/rotten/ig,``).split` `
}
