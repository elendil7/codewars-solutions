function digitize(n) {
  return n.toString().split("").reverse().map(v => parseInt(v));
}
