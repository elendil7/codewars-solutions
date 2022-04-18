function tribonacci(sig,n){
  if(n === 0) return [];
  while(sig.length<n){
    sig.push(sig[sig.length-1]+sig[sig.length-2]+sig[sig.length-3])
  }
  return sig.slice(0, n)
}
