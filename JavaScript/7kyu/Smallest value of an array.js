function min(arr, toReturn) {
  return toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}
