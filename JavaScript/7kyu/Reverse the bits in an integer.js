function reverseBits (n) {
  return parseInt([...n.toString(2)].reverse().join``, 2)
}
