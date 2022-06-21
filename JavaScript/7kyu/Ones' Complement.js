function onesComplement(n) {
  return [...``+n].map(v=>v<1?1:0).join``
}
