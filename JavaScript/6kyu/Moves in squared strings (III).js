function rot90Clock(str) {
  return diag1Sym(str).split("\n").map(v=>[...v].reverse().join("")).join("\n")
}
function diag1Sym(str) {
  let arr = str.split("\n")
  let res = [], temp = ""
  for(let i = 0; i < arr.length; ++i){
    for(let j = 0; j < arr.length; ++j){
      temp += arr[j][i]
    }
    res.push(temp)
    temp = ""
  }
  return res.join("\n")  
}
function selfieAndDiag1(str) {
  let arr = str.split("\n")
  let symArr = diag1Sym(str).split("\n")
  let res = []
  for(let i = 0; i < arr.length; ++i){
    res.push(`${arr[i]}|${symArr[i]}`)
  }
  return res.join("\n")
}
function oper(fct, s) {
  return fct(s)
}
