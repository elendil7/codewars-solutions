function myParseInt(str) {
  return /[a-z.,]/ig.test(str) ? NaN : +str
}
