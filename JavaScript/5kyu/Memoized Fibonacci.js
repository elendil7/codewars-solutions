var fibonacci = (function(n) {
  let cache = {};

  function loopback(n) {
    let val;
    
    if(n in cache){
      val = cache[n]
    } else {
      if (n === 0 || n === 1) {
        val = n;
      } else {
        val = loopback(n-1) + loopback(n-2)
      }
      
      cache[n] = val;
    }
    return val;
  }
  return loopback;
})();
