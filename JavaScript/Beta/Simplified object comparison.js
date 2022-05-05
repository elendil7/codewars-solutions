var compareObjects = function(objectA, objectB) {
  for(let key in objectA){
    if(objectA[key] !== objectB[key]) return false
  }
  
  for(let key in objectB){
    if(objectA[key] !== objectB[key]) return false
  }
    
  return true
};
