function sortMyString(S) {
  return [S.split``.filter((v,i)=>!(i%2)).join``, S.split``.filter((v,i)=>i%2).join``].join` `
}
