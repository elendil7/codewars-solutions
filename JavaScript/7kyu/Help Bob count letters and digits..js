function countLettersAndDigits(input) {
  return [...input].map(v=>/[a-z\d]/ig.test(v)?v:``).join``.length
}
