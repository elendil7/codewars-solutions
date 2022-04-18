function opposite(n) {
  return String(n).charAt(0) === "-" ? parseFloat(n.toString().slice(1)) : parseFloat(`-${n}`)
}
