function freqSeq(str, sep) {
  function getCount(char, arr){
    return arr.filter(v=>v===char).length
  }
  
  return [...str].map((v,i,a)=>getCount(v,a)).join(sep)  
}
