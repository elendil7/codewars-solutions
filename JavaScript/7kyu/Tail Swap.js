function tailSwap(arr) {
  let arr0split = arr[0].split(`:`)
  let arr1split = arr[1].split(`:`)
  
  return [arr0split[0] + `:` + arr1split[1], arr1split[0] + `:` + arr0split[1]]
}
