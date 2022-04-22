function rot(str) {
  return [...str.split(`\n`).reverse()].map(v=>[...v].reverse().join``)
}
function selfieAndRot(str) {
  return [...str.split(`\n`)].map(v=>v+`.`.repeat(v.length)).concat([...str.split(`\n`).reverse()].map(v=>`.`.repeat(v.length)+[...v].reverse().join``))
}
function oper(fct, s) {
  return fct(s).join(`\n`)
}
