function vertMirror(strng) {
  let arr = strng.split("\n")
  let mapped = arr.map(v=>[...v].reverse().join(""))
  let res = mapped.join("\n")
  return res
}
function horMirror(strng) {
  let arr = strng.split("\n")
  let mapped = []
  for(let i = 0; i < arr.length; ++i) mapped.unshift(arr[i])
  let res = mapped.join("\n")
  return res
}
function oper(fct, s) {
  return fct(s)
}
