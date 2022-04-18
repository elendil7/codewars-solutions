function printerError(s) {
  return `${s.split("").map(v=>/[n-z]/.test(v) ? v : "").join("").length}/${s.length}`
}
