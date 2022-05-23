function calculate(str) {
  let arr = str.split(" ").filter(v=>/\d/.test(v)).map(v=>+v)
  return str.includes("loses") ? arr[0] - arr[1] : arr[1] + arr[0]
}
