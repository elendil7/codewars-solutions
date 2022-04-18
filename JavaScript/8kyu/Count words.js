function countWords(str) {
  return str.trim().split(/\s/).filter(v=>v).length
}
