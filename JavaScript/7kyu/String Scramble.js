function scramble(str, arr) {
  let res = [...Array(str.length)]
  
  for(let i = 0; i < str.length; ++i){
    res[arr[i]] = str[i]
  }
  
  return res.join("")
}
