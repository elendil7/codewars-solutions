function eliminateUnsetBits(number) {
  return parseInt(number.toString(2).replace(/0/g,""), 2) || 0
}
