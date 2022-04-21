function solve(arr) {
  return [...new Set(arr.reverse())].reverse()
}
