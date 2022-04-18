multiplicationTable = function(s) {
  let res = []
  for(let x = 1; x <= s; x++){
    let temp = []
    for(let y = 1; y <= s; y++){
      temp.push(x*y)
    }
    res.push(temp)
    temp = []
  }
  return res
}
