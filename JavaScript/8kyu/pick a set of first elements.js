function first(arr, n) {
  return n==0?[]:!n?[arr[0]]:arr.slice(0,n)
}
