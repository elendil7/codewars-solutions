const reverseSeq = n => {
  return Array.from(Array(n).keys()).map(v=>v+1).reverse()
};

reverseSeq=n=>Array.from(Array(n).keys()).map(v=>v+1).reverse()

reverseSeq=n=>[...Array(n).keys()].map(v=>v+1).reverse()

reverseSeq=n=>new Array(n).fill(n).map((c,i)=>c-i)
