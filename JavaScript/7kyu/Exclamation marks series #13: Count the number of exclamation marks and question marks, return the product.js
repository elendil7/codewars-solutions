function product (str) {
  return [...str].filter(v=>v==`!`).length * [...str].filter(v=>v==`?`).length
}
