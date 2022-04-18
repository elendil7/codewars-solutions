var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count == 0) return `0=0`
    if(count < 0) return `${count}<0`
    let arr = Array.from(Array(count+1).keys())
    return `${arr.join`+`} = ${arr.reduce((a,b)=>a+b)}`
  };

  return SequenceSum;

})();
